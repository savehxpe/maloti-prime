"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

interface Product {
    id?: string | number;
    name: string;
    price: number;
    image?: string;
    tier?: string;
    type?: string;
}

interface MalotiContextType {
    cartPing: boolean;
    pingCart: () => void;
    innerCircleOpen: boolean;
    setInnerCircleOpen: (open: boolean) => void;
    cart: Product[];
    addToCart: (product: Product) => void;
    clearCart: () => void;
    user: User | null;
}

const MalotiContext = createContext<MalotiContextType | undefined>(undefined);

export function MalotiProvider({ children }: { children: React.ReactNode }) {
    const [cartPing, setCartPing] = useState(false);
    const [innerCircleOpen, setInnerCircleOpen] = useState(false);
    const [cart, setCart] = useState<Product[]>([]);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Safe dynamic import to allow SSR
        const initAuth = async () => {
            const { auth } = await import("@/lib/firebase");
            onAuthStateChanged(auth, (usr: any) => {
                setUser(usr);
            });
        }
        initAuth().catch(console.error);
    }, []);

    const pingCart = () => {
        setCartPing(true);
        setTimeout(() => setCartPing(false), 500);
    };

    const addToCart = (product: Product) => {
        setCart((prev) => [...prev, product]);
        pingCart();
    };

    const clearCart = () => setCart([]);

    return (
        <MalotiContext.Provider value={{ cartPing, pingCart, innerCircleOpen, setInnerCircleOpen, cart, addToCart, clearCart, user }}>
            {children}
        </MalotiContext.Provider>
    );
}

export function useMaloti() {
    const context = useContext(MalotiContext);
    if (!context) {
        throw new Error("useMaloti must be used within a MalotiProvider");
    }
    return context;
}

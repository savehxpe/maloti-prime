"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface MalotiContextType {
    cartPing: boolean;
    pingCart: () => void;
    innerCircleOpen: boolean;
    setInnerCircleOpen: (open: boolean) => void;
}

const MalotiContext = createContext<MalotiContextType | undefined>(undefined);

export function MalotiProvider({ children }: { children: React.ReactNode }) {
    const [cartPing, setCartPing] = useState(false);
    const [innerCircleOpen, setInnerCircleOpen] = useState(false);

    const pingCart = () => {
        setCartPing(true);
        setTimeout(() => setCartPing(false), 500);
    };

    return (
        <MalotiContext.Provider value={{ cartPing, pingCart, innerCircleOpen, setInnerCircleOpen }}>
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

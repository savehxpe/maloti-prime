"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Diamond, Home, Store, Truck, User, ArrowRightLeft } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const retailLinks = [
    { label: "Home", href: "/home", icon: Home },
    { label: "Boutique", href: "/boutique", icon: Store },
    { label: "Profile", href: "/profile", icon: User },
];

const wholesaleLinks = [
    { label: "B2B Portal", href: "/wholesale", icon: Truck },
    { label: "Catalog", href: "/catalog", icon: Store },
    { label: "Partner Profile", href: "/partner", icon: User },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [mode, setMode] = useState<"retail" | "wholesale">("retail");

    const links = mode === "retail" ? retailLinks : wholesaleLinks;

    return (
        <aside className="hidden lg:flex w-[280px] flex-col border-r sticky top-0 h-screen"
            style={{ borderColor: "#493922", background: "rgba(26,22,18,0.95)", backdropFilter: "blur(12px)" }}
        >
            <div className="p-6 flex items-center gap-3 border-b border-[#493922]">
                <div className="size-10 flex items-center justify-center rounded-lg shadow-lg"
                    style={{ background: "linear-gradient(135deg, #f49d25, #D4AF37)" }}
                >
                    <Diamond size={24} style={{ color: "#1a1612" }} />
                </div>
                <h2 className="text-white text-xl font-black leading-tight tracking-[0.2em] uppercase">
                    Maloti<br />Prime
                </h2>
            </div>

            <div className="flex-1 py-8 px-4 flex flex-col gap-2">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 font-bold ${isActive ? 'shadow-lg' : 'hover:bg-[#26201a]'}`}
                            style={{
                                color: isActive ? "#1a1612" : "#cbb290",
                                background: isActive ? "linear-gradient(to right, #f49d25, #D4AF37)" : "transparent"
                            }}
                        >
                            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                            <span className="tracking-wide">{link.label}</span>
                        </Link>
                    )
                })}
            </div>

            <div className="p-4 border-t border-[#493922]">
                <button
                    onClick={() => setMode(mode === "retail" ? "wholesale" : "retail")}
                    className="w-full flex items-center justify-between p-4 rounded-xl transition-all group hover:bg-[#26201a]"
                    style={{ border: "1px solid #493922" }}
                >
                    <div className="flex flex-col text-left">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#94a3b8]">Current Mode</span>
                        <span className="text-sm font-bold capitalize text-white group-hover:text-[#f49d25] transition-colors">
                            {mode} Experience
                        </span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-[#1a1612] border border-[#493922] flex items-center justify-center text-[#cbb290] group-hover:text-[#f49d25] group-hover:border-[#f49d25] transition-colors">
                        <ArrowRightLeft size={14} />
                    </div>
                </button>
            </div>
        </aside>
    );
}

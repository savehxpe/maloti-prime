"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Store, Truck, User } from "lucide-react";

const tabs = [
    { label: "Home", href: "/home", icon: Home },
    { label: "Boutique", href: "/boutique", icon: Store },
    { label: "Wholesale", href: "/wholesale", icon: Truck },
    { label: "Profile", href: "/profile", icon: User },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 inset-x-0 z-50 border-t border-surface-border"
            style={{ background: "rgba(17,14,10,0.95)", backdropFilter: "blur(16px)" }}
        >
            <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
                {tabs.map((tab) => {
                    const isActive = pathname === tab.href;
                    const Icon = tab.icon;
                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className="relative flex flex-col items-center justify-center gap-1 px-3 py-2 transition-all duration-200"
                            style={{ color: isActive ? "#f49d25" : "#cbb290" }}
                        >
                            <Icon
                                size={22}
                                strokeWidth={isActive ? 2.5 : 1.8}
                            />
                            <span className="text-[10px] font-bold uppercase tracking-wider">
                                {tab.label}
                            </span>
                            {isActive && (
                                <span className="absolute -bottom-0 w-8 h-0.5 rounded-full" style={{ background: "#f49d25" }} />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

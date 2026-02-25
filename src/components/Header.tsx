"use client";

import Link from "next/link";
import { Diamond, Search, ShoppingBag, UserCircle } from "lucide-react";

export default function Header() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b px-4 lg:px-10 py-4 sticky top-0 z-50"
            style={{ borderColor: "#493922", background: "rgba(26,22,18,0.95)", backdropFilter: "blur(12px)" }}
        >
            <div className="flex items-center gap-3">
                <Link href="/home" className="flex items-center gap-3 group">
                    <div className="size-8 flex items-center justify-center" style={{ color: "#f49d25" }}>
                        <Diamond size={28} strokeWidth={2} />
                    </div>
                    <h2 className="text-white text-lg font-bold leading-tight tracking-tight hidden sm:block">
                        Maloti Prime
                    </h2>
                </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-9">
                {["Shop", "Strains", "Edibles", "Accessories"].map((item) => (
                    <a
                        key={item}
                        href="#"
                        className="text-sm font-medium transition-colors hover:opacity-80"
                        style={{ color: "#cbb290" }}
                    >
                        {item}
                    </a>
                ))}
            </nav>

            <div className="flex items-center gap-3">
                <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
                    <div className="flex w-full items-stretch rounded-lg h-full border transition-colors"
                        style={{ borderColor: "#493922", background: "rgba(38,32,26,0.5)" }}
                    >
                        <div className="flex items-center justify-center pl-4" style={{ color: "#cbb290" }}>
                            <Search size={18} />
                        </div>
                        <input
                            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 border-none bg-transparent h-full px-3 text-sm"
                            placeholder="Search premium..."
                            style={{ color: "#fff" }}
                        />
                    </div>
                </label>

                <button className="flex items-center justify-center rounded-lg size-10 text-white hover:opacity-80 transition-opacity"
                    style={{ background: "#26201a" }}
                >
                    <ShoppingBag size={20} />
                </button>
                <button className="flex items-center justify-center rounded-lg size-10 text-white hover:opacity-80 transition-opacity"
                    style={{ background: "#26201a" }}
                >
                    <UserCircle size={20} />
                </button>
            </div>
        </header>
    );
}

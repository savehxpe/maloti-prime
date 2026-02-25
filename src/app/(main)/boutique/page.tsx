import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { SlidersHorizontal } from "lucide-react";

export const metadata: Metadata = {
    title: "The Boutique — Maloti Prime",
    description: "Explore Maloti Prime's premium indoor strains collection. Curated cannabis for the discerning connoisseur.",
};

const strains = [
    { name: "Lesotho Gold", type: "Sativa", terpene: "Citrus", price: 140 },
    { name: "Maloti Haze", type: "Indica", terpene: "Pine", price: 120 },
    { name: "Highland Kush", type: "Hybrid", terpene: "Spicy", price: 160 },
    { name: "Maseru Berry", type: "Indica", terpene: "Sweet", price: 130 },
    { name: "Thaba Bosiu", type: "Sativa", terpene: "Woody", price: 150 },
    { name: "Royal Gorilla", type: "Hybrid", terpene: "Diesel", price: 180 },
];

const categories = ["The Collection", "Extracts", "Edibles", "Artifacts"];
const filters = ["Class", "Potency", "Terpenes"];

export default function BoutiquePage() {
    return (
        <main className="flex flex-1 justify-center py-8 px-4 lg:px-12" style={{ background: "#1a1612" }}>
            <div className="flex flex-col max-w-[1400px] flex-1">
                {/* Category Tabs */}
                <div className="pb-8 flex justify-center">
                    <div className="flex border-b gap-8 lg:gap-12 overflow-x-auto no-scrollbar" style={{ borderColor: "#493922" }}>
                        {categories.map((cat, i) => (
                            <a
                                key={cat}
                                href="#"
                                className="flex flex-col items-center justify-center pb-3 pt-4 min-w-max px-2 transition-colors border-b-2"
                                style={{
                                    borderColor: i === 0 ? "#f49d25" : "transparent",
                                    color: i === 0 ? "#fff" : "#cbb290",
                                }}
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.1em]">{cat}</p>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Page Title */}
                <div className="flex flex-col items-center text-center gap-4 py-8">
                    <h1 className="text-white text-4xl md:text-5xl font-light uppercase tracking-[0.05em]">
                        The Boutique
                    </h1>
                    <div className="h-0.5 w-24 mb-2" style={{ background: "#f49d25" }} />
                    <p className="text-base font-light leading-relaxed max-w-2xl" style={{ color: "#cbb290" }}>
                        Exquisite cannabis cultivars curated for the discerning connoisseur. Elevate your senses with Maloti Prime&apos;s premium selection.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex justify-between items-center py-6 border-y" style={{ borderColor: "rgba(73,57,34,0.3)" }}>
                    <div className="flex gap-4 items-center overflow-x-auto no-scrollbar">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                className="group flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition-all hover:opacity-80"
                                style={{ borderColor: "#493922", color: "#cbb290" }}
                            >
                                <span>{filter}</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors hover:opacity-80"
                            style={{ color: "#cbb290" }}
                        >
                            <SlidersHorizontal size={16} />
                            <span>Filter</span>
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 py-10">
                    {strains.map((strain) => (
                        <ProductCard key={strain.name} {...strain} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center py-12 border-t mt-8" style={{ borderColor: "rgba(73,57,34,0.3)" }}>
                    <div className="flex gap-4 items-center">
                        <a href="#" className="text-xs uppercase tracking-widest border-b border-transparent transition-colors pb-0.5 hover:opacity-80"
                            style={{ color: "#cbb290" }}
                        >
                            Previous
                        </a>
                        <div className="flex gap-3 mx-4">
                            <span className="font-bold text-sm" style={{ color: "#f49d25" }}>1</span>
                            <span className="text-sm" style={{ color: "rgba(203,178,144,0.5)" }}>2</span>
                            <span className="text-sm" style={{ color: "rgba(203,178,144,0.5)" }}>3</span>
                        </div>
                        <a href="#" className="text-xs uppercase tracking-widest border-b border-transparent transition-colors pb-0.5 hover:opacity-80"
                            style={{ color: "#cbb290" }}
                        >
                            Next
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

import type { Metadata } from "next";
import { Truck, ShoppingCart, Diamond, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Home — Maloti Prime",
    description: "Lesotho's First & Largest Premium Cannabis Dispensary. Experience luxury delivered to your door.",
};

const collections = [
    { label: "Maloti Reserve", title: "Top Shelf", gradient: "linear-gradient(135deg, #064e3b, #065f46)" },
    { label: "Exquisite Taste", title: "New Arrivals", gradient: "linear-gradient(135deg, #78350f, #92400e)" },
    { label: "Gourmet", title: "Edibles", gradient: "linear-gradient(135deg, #4c1d95, #5b21b6)" },
    { label: "Potent Extracts", title: "Concentrates", gradient: "linear-gradient(135deg, #134e4a, #115e59)" },
];

const products = [
    { name: "Royal Swazi Gold", price: "M250", desc: "Energizing • Citrus • 24% THC", badge: "Sativa", badgeColor: "#f49d25" },
    { name: "Maluti Mountain Mist", price: "M320", desc: "Relaxing • Pine • 18% THC", badge: "Indica", badgeColor: "#8b5cf6" },
    { name: "Highland Pre-Rolls", price: "M180", desc: "Balanced • Earthy • 5 Pack", badge: "Hybrid", badgeColor: "#16a34a" },
    { name: "Basotho Berry Gummies", price: "M200", desc: "Euphoric • Sweet • 100mg Total", badge: "Hybrid", badgeColor: "#16a34a" },
];

export default function HomePage() {
    return (
        <main className="flex flex-col gap-8 p-4 lg:p-10">
            {/* Hero Section */}
            <div className="w-full rounded-2xl overflow-hidden relative min-h-[450px] lg:min-h-[500px] flex flex-col justify-end p-6 lg:p-16"
                style={{ background: "linear-gradient(135deg, #26201a 0%, #1a1612 40%, #26201a 100%)" }}
            >
                <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.3), transparent)" }}
                />

                <div className="relative z-10 max-w-3xl flex flex-col gap-6">
                    {/* Delivery Badge */}
                    <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full border"
                        style={{ background: "rgba(244,157,37,0.15)", borderColor: "rgba(244,157,37,0.3)", backdropFilter: "blur(8px)" }}
                    >
                        <Truck size={14} style={{ color: "#f49d25" }} />
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#f49d25" }}>
                            First Premium Delivery in Lesotho
                        </span>
                    </div>

                    <h1 className="text-white text-3xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
                        Maloti Prime: Lesotho&apos;s First &amp; Largest{" "}
                        <span style={{ color: "#f49d25" }}>Premium Dispensary</span>
                    </h1>

                    <p className="text-lg lg:text-xl font-medium max-w-lg leading-relaxed" style={{ color: "#e2e8f0" }}>
                        Experience luxury delivered directly to your door. The finest selection for the discerning connoisseur.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-2">
                        <button className="font-bold text-lg px-8 py-4 rounded-lg transition-transform active:scale-95 flex items-center gap-2 shadow-lg"
                            style={{ background: "#f49d25", color: "#1a1612", boxShadow: "0 4px 20px rgba(244,157,37,0.3)" }}
                        >
                            REQUEST DELIVERY
                            <Truck size={18} />
                        </button>
                        <button className="font-bold text-base px-8 py-4 rounded-lg transition-colors flex items-center gap-2 text-white border"
                            style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
                        >
                            View Menu
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured Collections */}
            <div className="flex flex-col gap-6">
                <div className="flex items-end justify-between px-2">
                    <h2 className="text-white text-2xl lg:text-3xl font-bold leading-tight tracking-tight">
                        Featured Collections
                    </h2>
                    <a href="#" className="font-bold text-sm flex items-center gap-1" style={{ color: "#f49d25" }}>
                        View All <ArrowRight size={14} />
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {collections.map((col) => (
                        <a
                            key={col.title}
                            href="#"
                            className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                            style={{ aspectRatio: "4/5" }}
                        >
                            <div
                                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                                style={{ background: col.gradient }}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-7xl opacity-10">🌿</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 opacity-80 group-hover:opacity-70 transition-opacity"
                                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2), transparent)" }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1">
                                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#f49d25" }}>
                                    {col.label}
                                </span>
                                <h3 className="text-white text-xl font-bold">{col.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Curated For You */}
            <div className="flex flex-col gap-6 pt-6">
                <h2 className="text-white text-2xl lg:text-3xl font-bold leading-tight tracking-tight px-2">
                    Curated For You
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.name}
                            className="rounded-xl p-4 flex flex-col gap-4 border transition-colors group hover:opacity-90"
                            style={{ background: "#26201a", borderColor: "#493922" }}
                        >
                            <div className="relative rounded-lg overflow-hidden"
                                style={{ aspectRatio: "1/1", background: "rgba(0,0,0,0.3)" }}
                            >
                                <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                                    style={{ background: "linear-gradient(135deg, #26201a, #1a1612)" }}
                                >
                                    <span className="text-5xl opacity-15">🌿</span>
                                </div>
                                <div className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded"
                                    style={{ background: product.badgeColor, color: product.badgeColor === "#f49d25" ? "#1a1612" : "#fff" }}
                                >
                                    {product.badge}
                                </div>
                                <button className="absolute bottom-3 right-3 size-10 rounded-full shadow-lg flex items-center justify-center translate-y-12 group-hover:translate-y-0 transition-transform duration-300"
                                    style={{ background: "#1a1612", color: "#f49d25" }}
                                >
                                    <ShoppingCart size={18} />
                                </button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-white font-bold text-lg">{product.name}</h3>
                                    <p className="font-bold" style={{ color: "#f49d25" }}>{product.price}</p>
                                </div>
                                <p className="text-sm" style={{ color: "#94a3b8" }}>{product.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subscribe CTA */}
            <div className="mt-8 rounded-2xl border p-8 lg:p-12 relative overflow-hidden"
                style={{ background: "#26201a", borderColor: "#493922" }}
            >
                <div className="absolute top-0 right-0 w-1/2 h-full"
                    style={{ background: "linear-gradient(to left, rgba(244,157,37,0.1), transparent)" }}
                />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col gap-3 max-w-lg">
                        <h2 className="text-white text-3xl font-bold flex items-center gap-3">
                            <Diamond size={24} style={{ color: "#f49d25" }} />
                            Join Maloti Prime
                        </h2>
                        <p style={{ color: "#94a3b8" }}>
                            Subscribe for exclusive drops, member-only events in Maseru, and premium discounts.
                        </p>
                    </div>
                    <div className="flex w-full md:w-auto gap-2">
                        <input
                            className="rounded-lg px-4 py-3 min-w-[250px] text-white text-sm focus:outline-none border"
                            style={{ background: "rgba(0,0,0,0.3)", borderColor: "rgba(255,255,255,0.1)" }}
                            placeholder="Enter your email"
                            type="email"
                        />
                        <button className="font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
                            style={{ background: "#f49d25", color: "#1a1612" }}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

"use client";

import { motion } from "framer-motion";
import { Truck, Diamond, ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import DeliveryRequestTrigger from "@/components/DeliveryRequestTrigger";

const collections = [
    { slug: "maloti-reserve", label: "Maloti Reserve", title: "Top Shelf", gradient: "linear-gradient(135deg, #064e3b, #065f46)", image: "/images/collection_reserve.png", auraColor: "rgba(244,157,37,0.4)" },
    { slug: "exquisite-taste", label: "Exquisite Taste", title: "Fine Art", gradient: "linear-gradient(135deg, #78350f, #92400e)", image: "/images/collection_exquisite.png", auraColor: "rgba(229,229,225,0.2)" },
    { slug: "gourmet-edibles", label: "Gourmet Edibles", title: "Sunset Infusions", gradient: "linear-gradient(135deg, #4c1d95, #5b21b6)", image: "/images/collection_gourmet.png", auraColor: "rgba(255,140,0,0.3)" },
    { slug: "potent-extracts", label: "Potent Extracts", title: "Potent Purity", gradient: "linear-gradient(135deg, #134e4a, #115e59)", image: "/images/collection_extracts.png", auraColor: "rgba(0,255,255,0.3)" },
];

const products = [
    {
        id: "std-001",
        name: "Mountain Gold",
        tier: "Standard",
        price: 100,
        type: "Sativa",
        description: "The Kingdom's dependable favorite. Clean, sun-grown local excellence.",
        badge: "Local Pride",
        image: "/images/strain_gold_1772159000704.png"
    },
    {
        id: "pre-002",
        name: "Orange Maloti Frost",
        tier: "Premium",
        price: 140,
        type: "Hybrid",
        description: "Elevated greenhouse quality. Intense citrus notes with a smooth Maloti finish.",
        badge: "Premium Grade",
        image: "/images/strain_purple_1772159018919.png"
    },
    {
        id: "res-003",
        name: "Outworld Reserve",
        tier: "Reserve",
        price: 180,
        type: "Indica",
        description: "Elite indoor cultivation. Our highest THC profile, reserved for the inner circle.",
        badge: "Kingdom's Reserve",
        locked: true,
        image: "/images/product_outworld_reserve.png"
    }
];

export default function HomePage() {
    return (
        <main className="flex flex-col gap-8 p-4 lg:p-10 bg-[#0a0806] min-h-screen">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full rounded-2xl overflow-hidden relative min-h-[450px] lg:min-h-[500px] flex flex-col justify-end p-6 lg:p-16"
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

                    <h1 className="text-white text-3xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight uppercase">
                        Maloti Prime: Lesotho&apos;s First &amp; Largest{" "}
                        <span style={{ color: "#f49d25" }}>Premium Dispensary</span>
                    </h1>

                    <p className="text-lg lg:text-xl font-medium max-w-lg leading-relaxed uppercase tracking-widest opacity-80" style={{ color: "#cbb290" }}>
                        Experience luxury delivered directly to your door. The finest selection for the discerning connoisseur.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-2">
                        <DeliveryRequestTrigger />
                        <Link href="/collections/maloti-reserve">
                            <motion.button
                                className="font-bold text-base px-8 py-4 rounded-lg flex items-center gap-2 text-white border border-white/20 bg-white/5 backdrop-blur-md"
                                whileHover={{ background: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                EXPLORE TOP SHELF
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Featured Collections */}
            <div className="flex flex-col gap-6">
                <div className="flex items-end justify-between px-2">
                    <h2 className="text-white text-2xl lg:text-3xl font-bold leading-tight tracking-tight uppercase">
                        Featured Collections
                    </h2>
                    <Link href="/collections" className="font-bold text-sm flex items-center gap-1 uppercase tracking-widest" style={{ color: "#f49d25" }}>
                        View All <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {collections.map((col) => (
                        <Link
                            key={col.slug}
                            href={`/collections/${col.slug}`}
                            className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border"
                            style={{ aspectRatio: "4/5", borderColor: "rgba(255,255,255,0.05)" }}
                        >
                            <div
                                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 bg-cover bg-center"
                                style={{ backgroundImage: `url(${col.image})` }}
                            >
                                <div className="absolute inset-0 bg-black/20" />
                                <div className="absolute inset-0"
                                    style={{
                                        background: `radial-gradient(circle at center, ${col.auraColor || 'transparent'} 0%, transparent 70%)`,
                                        opacity: 0.6
                                    }}
                                />
                            </div>
                            <div className="absolute inset-0 opacity-80 group-hover:opacity-60 transition-opacity"
                                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2), transparent)" }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1 z-10">
                                <span className="text-xs font-black uppercase tracking-wider" style={{ color: "#f49d25" }}>
                                    {col.label}
                                </span>
                                <h3 className="text-white text-xl font-bold uppercase tracking-tighter">{col.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Curated For You */}
            <div className="flex flex-col gap-6 pt-6">
                <h2 className="text-white text-2xl lg:text-3xl font-bold leading-tight tracking-tight px-2 uppercase">
                    Curated For You
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            type={product.type}
                            description={product.description}
                            price={product.price}
                            badge={product.badge}
                            image={product.image}
                            tier={product.tier}
                            locked={product.locked}
                        />
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
                        <h2 className="text-white text-3xl font-black flex items-center gap-3 uppercase tracking-widest">
                            <Diamond size={24} style={{ color: "#f49d25" }} />
                            Join the Inner Circle
                        </h2>
                        <p className="uppercase text-xs tracking-[0.2em] font-medium" style={{ color: "#94a3b8" }}>
                            Subscribe for exclusive drops, member-only events in Maseru, and premium discounts.
                        </p>
                    </div>
                    <div className="flex w-full md:w-auto gap-2">
                        <input
                            className="rounded-lg px-4 py-3 min-w-[250px] text-white text-sm focus:outline-none border font-bold tracking-widest"
                            style={{ background: "rgba(0,0,0,0.3)", borderColor: "rgba(255,255,255,0.1)" }}
                            placeholder="MEMBER EMAIL"
                            type="email"
                        />
                        <button className="font-black px-8 py-3 rounded-lg transition-colors whitespace-nowrap uppercase tracking-widest text-xs"
                            style={{ background: "#FF8C00", color: "#1a1612" }}
                        >
                            Sync Identity
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

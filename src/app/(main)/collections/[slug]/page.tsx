"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Diamond, Sparkles, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';

const collectionData: Record<string, any> = {
    "maloti-reserve": {
        name: "Maloti Reserve",
        tagline: "The Pinnacle of High-Altitude Cultivation",
        description: "Our most elite tier, grown in controlled indoor environments at high altitude to maximize terpene profiles and cannabinoid density.",
        color: "#D4AF37",
        image: "/images/collection_reserve.png",
        products: [
            { id: "res-001", name: "Kingdom Kush", tier: "Reserve", price: 180, type: "Indica", description: "Deep purple hues with a heavy gas aroma. The definitive Lesotho heavy-hitter.", badge: "Elite", locked: true },
            { id: "res-002", name: "Maseru Moon", tier: "Reserve", price: 195, type: "Hybrid", description: "Frosty trichomes that glimmer like the moon over the Thaba-Bosiu plateau.", badge: "Member Only", locked: true }
        ]
    },
    "exquisite-taste": {
        name: "Exquisite Taste",
        tagline: "Fine Art in Every Flower",
        description: "Curated for the connoisseur who values flavor and aroma above all else. A sensory journey through Lesotho's finest.",
        color: "#cbb290",
        image: "/images/collection_exquisite.png",
        products: [
            { id: "pre-001", name: "Mahase Gold", tier: "Premium", price: 150, type: "Sativa", description: "Lemony brightness with a smooth, lingering honey finish.", badge: "Connoisseur Choice" }
        ]
    },
    "gourmet-edibles": {
        name: "Gourmet Edibles",
        tagline: "Sunset Orange Infusions",
        description: "Artisan-crafted infusions using locally sourced ingredients and high-grade extracts.",
        color: "#FF8C00",
        image: "/images/collection_gourmet.png",
        products: [
            { id: "ed-001", name: "Maloti Honey Rings", tier: "Premium", price: 120, type: "Edible", description: "100mg of pure delight, infused with organic mountain honey.", badge: "Best Seller" }
        ]
    },
    "potent-extracts": {
        name: "Potent Extracts",
        tagline: "Cyan/Neon Precision",
        description: "High-purity concentrates processed using state-of-the-art closed-loop systems.",
        color: "#00FFFF",
        image: "/images/collection_extracts.png",
        products: [
            { id: "ex-001", name: "Maloti Live Resin", tier: "Reserve", price: 220, type: "Extract", description: "Full spectrum terpene profile captured at the peak of freshness.", badge: "High Speed", locked: true }
        ]
    }
};

export default function CollectionPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const collection = collectionData[slug];

    if (!collection) return <div className="p-10 text-white">Collection not found.</div>;

    return (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="min-h-screen bg-[#0a0806] text-white"
        >
            {/* Hero Header */}
            <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
                <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] via-transparent to-transparent" />

                <div className="absolute top-8 left-8 z-20">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={16} /> [ Back to Sanctuary ]
                    </button>
                </div>

                <div className="absolute bottom-10 left-8 z-20 max-w-2xl">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                        <Sparkles size={12} style={{ color: collection.color }} />
                        <span className="text-[10px] font-black uppercase tracking-widest">{collection.tagline}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4" style={{ color: collection.color }}>
                        {collection.name}
                    </h1>
                    <p className="text-sm md:text-lg text-white/70 leading-relaxed uppercase tracking-widest font-medium">
                        {collection.description}
                    </p>
                </div>
            </div>

            {/* Product Grid */}
            <div className="p-8 lg:p-16">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-[1px] flex-1 bg-white/10" />
                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Available Shipments</h2>
                    <div className="h-[1px] flex-1 bg-white/10" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {collection.products.map((p: any) => (
                        <ProductCard
                            key={p.id}
                            {...p}
                        />
                    ))}
                </div>
            </div>

            {/* Footer Decoration */}
            <div className="py-20 flex flex-col items-center opacity-20 pointer-events-none">
                <Diamond size={48} />
                <div className="mt-4 h-32 w-[1px] bg-gradient-to-b from-white to-transparent" />
            </div>
        </motion.div>
    );
}

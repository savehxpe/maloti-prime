import type { Metadata } from "next";
import { ArrowLeft, Diamond } from "lucide-react";

export const metadata: Metadata = {
    title: "Collections — Maloti Prime",
    description: "Explore our curated high-fidelity cannabis collections.",
};

const collections = [
    {
        label: "Maloti Reserve",
        title: "Top Shelf",
        description: "The crown jewel of our ecosystem. High-potency, indoor-grown excellence with a legendary footprint.",
        image: "/images/collection_reserve.png",
        auraColor: "rgba(244,157,37,0.4)"
    },
    {
        label: "Exquisite Taste",
        title: "New Arrivals",
        description: "Modern, minimalist, and perfectly cured. A selection for those who appreciate the finer details of the craft.",
        image: "/images/collection_exquisite.png",
        auraColor: "rgba(229,229,225,0.2)"
    },
    {
        label: "Gourmet Edibles",
        title: "Infusions",
        description: "Artisanal treats and balanced infusions. The perfect blend of flavor and elevated experience.",
        image: "/images/collection_gourmet.png",
        auraColor: "rgba(255,140,0,0.3)"
    },
    {
        label: "Potent Extracts",
        title: "Concentrates",
        description: "Scientific precision met with natural potency. Our cleanest extracts for the true connoisseur.",
        image: "/images/collection_extracts.png",
        auraColor: "rgba(0,255,255,0.3)"
    },
];

export default function CollectionsPage() {
    return (
        <main className="flex flex-col gap-10 p-6 lg:p-16 min-h-screen" style={{ background: "#1a1612" }}>
            <header className="flex flex-col gap-4">
                <a href="/home" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: "#f49d25" }}>
                    <ArrowLeft size={16} /> Back to Home
                </a>
                <div className="flex items-center gap-4">
                    <Diamond size={32} style={{ color: "#f49d25" }} />
                    <h1 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter">
                        Our <span style={{ color: "#f49d25" }}>Collections</span>
                    </h1>
                </div>
                <p className="text-lg max-w-2xl font-medium" style={{ color: "#94a3b8" }}>
                    Carefully curated selections designed to meet the highest standards of the Maloti Prime ecosystem.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {collections.map((col) => (
                    <div
                        key={col.label}
                        className="group relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] border h-[400px] lg:h-[500px]"
                        style={{ borderColor: "rgba(255,255,255,0.05)" }}
                    >
                        {/* High-res Image Background */}
                        <div
                            className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110 bg-cover bg-center"
                            style={{ backgroundImage: `url(${col.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            {/* Glassmorphic Aura */}
                            <div className="absolute inset-0"
                                style={{
                                    background: `radial-gradient(circle at center, ${col.auraColor || 'transparent'} 0%, transparent 80%)`,
                                    opacity: 0.5
                                }}
                            />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 z-20">
                            <div className="backdrop-blur-md bg-black/30 border border-white/10 p-6 lg:p-8 rounded-2xl transform transition-all duration-500 group-hover:translate-y-[-10px]">
                                <span className="text-xs font-black uppercase tracking-[0.3em] mb-2 block" style={{ color: "#f49d25" }}>
                                    {col.label}
                                </span>
                                <h2 className="text-white text-3xl font-bold mb-4">{col.title}</h2>
                                <p className="text-sm lg:text-base leading-relaxed mb-6" style={{ color: "#cbd5e1" }}>
                                    {col.description}
                                </p>
                                <button className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest border transition-all hover:bg-white hover:text-black"
                                    style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}
                                >
                                    Explore Collection
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

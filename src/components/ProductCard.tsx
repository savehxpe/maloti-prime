"use client";

import { motion } from "framer-motion";
import { Heart, Plus, Lock } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import OutworldRenderer from "./OutworldRenderer";
import { useMaloti } from "@/context/MalotiContext";

interface ProductCardProps {
    name: string;
    type: string;
    description: string;
    price: number;
    badge?: string;
    image?: string;
    tier: string;
    locked?: boolean;
}

export default function ProductCard({
    name,
    type,
    description,
    price,
    badge = "Premium",
    image,
    tier,
    locked = false
}: ProductCardProps) {
    const { addToCart, innerCircleOpen, setInnerCircleOpen, user } = useMaloti();
    const [isAdding, setIsAdding] = useState(false);

    const isReserve = tier === "Reserve";
    const isPremium = tier === "Premium";
    const isStandard = tier === "Standard";

    let borderColor = "rgba(73, 57, 34, 0.3)";
    if (isStandard) borderColor = "rgba(229, 229, 229, 0.5)";
    if (isPremium) borderColor = "#f49d25";
    if (isReserve) borderColor = "#D4AF37";

    const userHasAccess = !!user;
    const requiresVerification = (isReserve && !userHasAccess) || locked;

    const handleInteraction = (e: React.MouseEvent) => {
        if (requiresVerification) {
            e.preventDefault();
            e.stopPropagation();
            setInnerCircleOpen(true);
        }
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (requiresVerification) {
            setInnerCircleOpen(true);
            return;
        }
        setIsAdding(true);
        addToCart({ name, type, price, image, tier });
        setTimeout(() => setIsAdding(false), 600);
    };

    return (
        <>
            <motion.div
                className="group flex flex-col cursor-pointer relative"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }} // MP-PHYS-01 (Tactile Feel)
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={handleInteraction}
            >
                <motion.div className="relative overflow-hidden mb-4 rounded-xl shadow-lg border"
                    style={{
                        aspectRatio: "4/5",
                        background: isReserve ? "rgba(26,22,18,0.4)" : "#1a1612",
                        backdropFilter: isReserve ? "blur(12px)" : "none",
                        borderColor
                    }}
                    animate={isReserve ? { boxShadow: ["0 0 10px rgba(212,175,55,0.2)", "0 0 20px rgba(244,157,37,0.4)", "0 0 10px rgba(212,175,55,0.2)"] } : {}}
                    transition={isReserve ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
                >
                    {locked && (
                        <div className="absolute top-4 right-14 z-20 p-2 rounded-full text-white bg-black/50 backdrop-blur-md border border-[#D4AF37]/30">
                            <Lock size={14} style={{ color: "#f49d25" }} />
                        </div>
                    )}

                    {/* Badge */}
                    <div className="absolute top-4 left-0 z-20 px-3 py-1 text-[10px] font-black tracking-widest uppercase shadow-lg"
                        style={{
                            background: isReserve ? "linear-gradient(90deg, #D4AF37, #f49d25)" : isPremium ? "#f49d25" : "#E5E5E5",
                            color: "#1a1612"
                        }}
                    >
                        {badge}
                    </div>

                    {/* Favorite */}
                    <div className="absolute top-4 right-4 z-20">
                        <button className="p-2.5 rounded-full text-white transition-colors hover:text-[#f49d25]"
                            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
                            onClick={(e) => {
                                if (!locked) {
                                    e.stopPropagation();
                                }
                            }}
                        >
                            <Heart size={16} />
                        </button>
                    </div>

                    {/* Image Area */}
                    <motion.div
                        className="w-full h-full flex items-center justify-center relative"
                        style={{ background: image && !isReserve ? "radial-gradient(circle at 50% 50%, #26201a, #0a0806)" : "#1a1612" }}
                        whileHover={!isReserve ? { scale: 1.05, filter: "brightness(1.15)" } : undefined}
                        transition={{ duration: 0.5 }}
                    >
                        {isReserve && !image ? (
                            <div className="w-full h-full absolute inset-0 z-10 flex items-center justify-center pt-8">
                                <OutworldRenderer tier={tier} />
                            </div>
                        ) : image ? (
                            <Image
                                src={image}
                                alt={name}
                                fill
                                className={`object-cover relative z-10 transition-transform duration-700 ease-out group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 ${locked ? "opacity-90 grayscale-[0.3]" : ""}`}
                            />
                        ) : (
                            <span className="text-6xl opacity-20 relative z-10">🌿</span>
                        )}

                        {!isReserve && <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,transparent_40%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />}
                    </motion.div>

                    {/* Add to Cart Pulse Interaction */}
                    <div className="absolute inset-x-0 bottom-4 px-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        <motion.button
                            className="w-full flex justify-center items-center gap-2 text-[#1a1612] font-black text-xs py-3.5 px-4 uppercase tracking-widest shadow-lg rounded-lg"
                            style={{ background: isAdding ? "#FF8C00" : "#f49d25" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleAddToCart}
                            animate={isAdding ? { scale: [1, 1.05, 1], boxShadow: "0 0 20px rgba(255,140,0,0.8)" } : {}}
                        >
                            {requiresVerification ? <Lock size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                            {isAdding ? "SUCCESS" : requiresVerification ? "VERIFY ACCESS" : "ADD TO CART"}
                        </motion.button>
                    </div>
                </motion.div>

                <div className="flex flex-col items-center text-center gap-1 mt-1">
                    <h3 className="text-white text-lg font-bold tracking-wide uppercase group-hover:text-[#f49d25] transition-colors">
                        {name}
                    </h3>
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-1.5 opacity-80" style={{ color: "#cbb290" }}>
                        {type}
                    </p>
                    <p className="text-[11px] line-clamp-2 px-2 text-center opacity-70 mb-2 leading-relaxed" style={{ color: "#cbb290" }}>
                        {description}
                    </p>
                    <div className="inline-flex items-center gap-2 mt-auto">
                        <span className="text-base font-black px-3 py-1 rounded bg-[#26201a] border border-[#f49d25]/20 shadow-[0_2px_10px_rgba(244,157,37,0.1)]" style={{ color: "#D4AF37" }}>
                            R{price.toFixed(2)}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">/ g</span>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

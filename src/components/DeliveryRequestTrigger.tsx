"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import LatuMapHUD from './LatuMapHUD'; // 3D Map Component
import { useMaloti } from '@/context/MalotiContext';

const DeliveryRequestTrigger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { cart } = useMaloti();
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        if (cart.length === 0) {
            setIsOpen(true);
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: cart,
                    memberId: 'anon' // This can be extracted from user state
                })
            });

            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                setIsOpen(true);
            }
        } catch (error) {
            console.error(error);
            setIsOpen(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative z-50">
            {/* The Trigger Button */}
            <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,140,0,0.4)" }}
                onClick={handleCheckout}
                disabled={loading}
                className="bg-[#FF8C00] text-black px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs shadow-lg transition-transform"
            >
                {loading ? "Processing Payment..." : (cart.length > 0 ? `Checkout (${cart.length})` : "Request Delivery")}
            </motion.button>

            {/* The 3D Map Expansion Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                damping: 15, // Rule: MP-PHYS-01 (Tactile Feel)
                                mass: 1
                            }
                        }}
                        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        className="fixed inset-0 bg-[#0a0806] z-[100] flex flex-col"
                    >
                        {/* Close Interface */}
                        <div className="p-6 flex justify-between items-center border-b border-white/10 bg-[#121212]/80 backdrop-blur-md z-11">
                            <h2 className="text-[#E5E5E5] tracking-[0.3em] uppercase text-sm font-bold">Latu-Live Tracking</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-[#f49d25] hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold"
                            >
                                [ Close ]
                            </button>
                        </div>

                        {/* The 3D Topographical Content */}
                        <div className="flex-1 relative overflow-hidden bg-black">
                            <LatuMapHUD /> {/* This is where the 3D Maseru mesh lives */}

                            {/* Overlay HUD Elements */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-10 left-6 p-4 bg-[#1a1a1a]/90 border-[1px] border-[#00FFFF]/30 backdrop-blur-md rounded-lg"
                            >
                                <p className="text-[#00FFFF] text-[10px] uppercase mb-1">Status</p>
                                <p className="text-white text-xs font-bold tracking-widest uppercase italic">Awaiting Fleet Sync...</p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DeliveryRequestTrigger;

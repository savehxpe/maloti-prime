"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Diamond } from "lucide-react";
import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onFinish, 800); // give time for the exit animation
        }, 2000); // 2-second load-up

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0806]"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <motion.div
                        className="flex flex-col items-center gap-6"
                    >
                        {/* Chrome finish evolving to Sunset Orange */}
                        <motion.div
                            className="relative size-32 rounded-full p-1"
                            initial={{
                                background: "linear-gradient(135deg, #e2e8f0, #94a3b8, #e2e8f0)",
                                boxShadow: "0 0 10px rgba(226,232,240,0.5)",
                                scale: 0.9,
                            }}
                            animate={{
                                background: "linear-gradient(135deg, #f49d25, #ea580c, #f49d25)",
                                boxShadow: "0 0 60px rgba(244,157,37,0.8)",
                                scale: 1,
                            }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        >
                            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#1a1612]">
                                <motion.div
                                    initial={{ color: "#e2e8f0" }}
                                    animate={{ color: "#f49d25" }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                >
                                    <Diamond size={64} />
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.h1
                            className="text-4xl font-bold uppercase tracking-[0.3em]"
                            initial={{ opacity: 0, y: 10, color: "#e2e8f0" }}
                            animate={{ opacity: 1, y: 0, color: "#f49d25" }}
                            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                        >
                            Maloti Prime
                        </motion.h1>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

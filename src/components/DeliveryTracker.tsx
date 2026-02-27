"use client";

import { motion } from "framer-motion";
import { Truck, Navigation } from "lucide-react";

export default function DeliveryTracker() {
    return (
        <div className="relative w-full overflow-hidden rounded-2xl border border-cyan-900/40 bg-[#070b12] p-4 lg:p-6 shadow-[0_0_30px_rgba(0,255,255,0.08)]">
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 shadow-[0_0_10px_#00faff]"></span>
                    </span>
                    LATU LIVE TRACKING
                </h3>
                <div className="text-xs uppercase tracking-widest text-cyan-500 border border-cyan-500/30 px-3 py-1.5 rounded-full bg-cyan-950/30 flex items-center gap-2">
                    <Navigation size={12} className="animate-pulse" />
                    In Transit
                </div>
            </div>

            {/* Map Container */}
            <div className="relative h-[250px] md:h-[300px] w-full rounded-xl overflow-hidden bg-[#03060a] border border-[#142130]">
                {/* Abstract Grid / Map Style */}
                <div
                    className="absolute inset-0 opacity-15"
                    style={{
                        backgroundImage: `linear-gradient(#00faff 1px, transparent 1px), linear-gradient(90deg, #00faff 1px, transparent 1px)`,
                        backgroundSize: '30px 30px',
                        backgroundPosition: 'center center'
                    }}
                />

                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-radial-vignette opacity-80"
                    style={{ background: 'radial-gradient(circle at center, transparent 30%, #03060a 90%)' }} />

                {/* Topographical Lines (Abstract) */}
                <svg className="absolute inset-0 h-full w-full opacity-10" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M 0,20 Q 30,10 60,30 T 100,20" fill="transparent" stroke="#00faff" strokeWidth="0.5" />
                    <path d="M 0,40 Q 40,20 70,50 T 100,40" fill="transparent" stroke="#00faff" strokeWidth="0.5" />
                    <path d="M 0,60 Q 50,40 80,70 T 100,60" fill="transparent" stroke="#00faff" strokeWidth="0.5" />
                    <path d="M 0,80 Q 20,60 50,80 T 100,70" fill="transparent" stroke="#00faff" strokeWidth="0.5" />
                </svg>

                {/* Animated Path */}
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    {/* Background path */}
                    <path
                        d="M 15,85 C 30,85 40,60 55,45 C 70,30 80,25 85,15"
                        fill="transparent"
                        stroke="#142130"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    {/* Glowing active path */}
                    <motion.path
                        d="M 15,85 C 30,85 40,60 55,45 C 70,30 80,25 85,15"
                        fill="transparent"
                        stroke="#00faff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        style={{ filter: "drop-shadow(0 0 8px #00faff)" }}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 0.65 }} // ~65% delivered
                        transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                    />
                </svg>

                {/* Start Location - Hub */}
                <div className="absolute left-[15%] top-[85%] z-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#1a2b3c] bg-[#050a0f]" />

                {/* End Location */}
                <div className="absolute left-[85%] top-[15%] z-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-900 bg-cyan-950 flex shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                    <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400" />
                </div>

                {/* Labels */}
                <span className="absolute left-[15%] top-[85%] mt-3 -ml-4 text-[10px] font-bold tracking-widest text-[#4a6b8c]">MASERU HUB</span>
                <span className="absolute left-[85%] top-[15%] mt-4 -ml-2 text-[10px] font-bold tracking-widest text-white drop-shadow-[0_0_5px_#00faff]">YOUR LOCATION</span>

                {/* Pulsating Delivery Icon */}
                <motion.div
                    className="absolute z-20 size-10 rounded-full bg-cyan-950 border border-cyan-400 flex items-center justify-center shadow-[0_0_20px_#00faff]"
                    /* Approximate path coordinate at 65% for the bezier curve defined above */
                    initial={{ left: '15%', top: '85%', x: '-50%', y: '-50%' }}
                    animate={{ left: '60%', top: '39%', x: '-50%', y: '-50%' }}
                    transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                >
                    <Truck size={20} className="text-cyan-400 drop-shadow-[0_0_5px_#00faff]" />
                </motion.div>
            </div>

            {/* Status Footer */}
            <div className="mt-5 flex justify-between items-center rounded-xl bg-[#03060a]/50 p-4 border border-cyan-900/20">
                <div className="flex gap-4 items-center">
                    <div className="h-10 w-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden shadow-inner">
                        <img src="https://i.pravatar.cc/100?img=11" alt="Driver" className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-400 uppercase tracking-wider">Driver</span>
                        <span className="text-white font-medium">Thabo M.</span>
                    </div>
                </div>
                <div className="flex flex-col text-right">
                    <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">Est. Arrival</span>
                    <span className="text-cyan-400 font-bold text-xl drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]">14 MIN</span>
                </div>
            </div>
        </div>
    );
}

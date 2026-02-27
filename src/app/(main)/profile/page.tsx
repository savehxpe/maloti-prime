"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Diamond, Shield, Truck, Sparkles, HelpCircle,
    LogOut, ChevronRight, Settings, Box,
    Layers, Zap, Clock, MapPin
} from "lucide-react";
import LatuMapHUD from "@/components/LatuMapHUD";

const vaultItems = [
    { id: "RCP-001", name: "Maloti Gold #001", date: "24.02.2026", type: "Digital Receipt", status: "Secured" },
    { id: "RCP-002", name: "Outworld Reserve #42", date: "26.02.2026", type: "Digital Receipt", status: "Secured" },
];

export default function ProfilePage() {
    const [settingsOpen, setSettingsOpen] = useState(false);

    return (
        <main className="flex-1 min-h-screen bg-[#0a0806] text-white p-4 lg:p-12 font-display">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column: Command HUD */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    {/* Character/Member Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-[#1a1612]/80 border border-white/5 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4">
                            <motion.button
                                animate={{ rotate: settingsOpen ? 90 : 0 }}
                                onClick={() => setSettingsOpen(!settingsOpen)}
                                className="text-white/40 hover:text-[#FF8C00] transition-colors"
                            >
                                <Settings size={20} />
                            </motion.button>
                        </div>

                        {/* 3D Rotating Badge Simulation */}
                        <div className="relative mb-6">
                            <motion.div
                                animate={{ rotateY: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="size-24 rounded-full border-4 border-[#FF8C00] shadow-[0_0_30px_rgba(255,140,0,0.3)] flex items-center justify-center bg-black overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8C00]/20 to-transparent" />
                                <Diamond size={48} className="text-[#FF8C00] drop-shadow-[0_0_10px_rgba(255,140,0,0.5)]" />
                            </motion.div>
                            <div className="absolute -bottom-2 -right-2 bg-[#FF8C00] text-black text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-[0.2em] shadow-lg">
                                L3 CLEARANCE
                            </div>
                        </div>

                        <h2 className="text-xl font-black uppercase tracking-[0.2em] mb-1">MEMBER #9263</h2>
                        <p className="text-[10px] text-[#FF8C00] uppercase tracking-[0.3em] mb-4 font-bold">Inner Circle Tier</p>

                        <div className="w-full h-[1px] bg-white/5 mb-6" />

                        <div className="grid grid-cols-2 gap-4 w-full">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Orders</span>
                                <span className="text-lg font-black text-[#FF8C00]">12</span>
                            </div>
                            <div className="flex flex-col gap-1 text-right">
                                <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Vault</span>
                                <span className="text-lg font-black text-[#FF8C00]">8</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Active Shipment HUD */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-black/60 border border-white/5 rounded-3xl overflow-hidden h-[300px] relative"
                    >
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-[#00FFFF]/20">
                            <div className="size-1.5 bg-[#00FFFF] rounded-full animate-pulse" />
                            <span className="text-[8px] font-black text-[#00FFFF] uppercase tracking-widest">Active Shipment: Maseru-Grid</span>
                        </div>
                        <LatuMapHUD />
                        <div className="absolute bottom-4 inset-x-4 bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/5 rounded-lg">
                                    <Truck size={14} className="text-[#FF8C00]" />
                                </div>
                                <div>
                                    <p className="text-[9px] uppercase font-bold text-white/40 mb-0.5">ETA: 12 MIN</p>
                                    <p className="text-[11px] font-bold text-white uppercase tracking-widest">Fleet Unit Alpha-4</p>
                                </div>
                            </div>
                            <MapPin size={16} className="text-[#00FFFF]" />
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Inventory & Settings */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    {/* Settings Overlay - Dynamic Expansion */}
                    <AnimatePresence>
                        {settingsOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="bg-[#1a1612]/60 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-2xl"
                            >
                                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { icon: Shield, label: "Privacy Protocol", desc: "Identity encryption" },
                                        { icon: Layers, label: "System Guard", desc: "Build & Deploy stability" },
                                        { icon: Zap, label: "Haptic Sync", desc: "Tactile response tuning" },
                                        { icon: Clock, label: "Timeframe", desc: "Maseru Local sync" }
                                    ].map((item, i) => (
                                        <button key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors text-left border border-white/5">
                                            <div className="p-2 bg-white/5 rounded-lg text-[#FF8C00]">
                                                <item.icon size={18} />
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-bold uppercase tracking-widest">{item.label}</h4>
                                                <p className="text-[10px] text-white/40 uppercase mt-0.5 font-medium">{item.desc}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Vault / Inventory Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[#1a1612]/30 border border-white/5 rounded-3xl p-8 flex-1"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <Box size={24} className="text-[#FF8C00]" />
                                <h2 className="text-xl font-black uppercase tracking-[0.2em]">The Vault</h2>
                            </div>
                            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Protocol MP-HYPE-01</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {vaultItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    className="p-5 border border-white/10 rounded-2xl flex flex-col gap-4 relative overflow-hidden group transition-colors"
                                    style={{ background: "rgba(255,140,0,0.02)" }}
                                >
                                    <div className="absolute top-0 left-0 w-1 h-full bg-[#FF8C00]/20" />
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[9px] font-black text-[#FF8C00] uppercase tracking-widest">{item.id}</span>
                                            <h3 className="text-sm font-black uppercase text-white tracking-widest group-hover:text-[#FF8C00] transition-colors">{item.name}</h3>
                                        </div>
                                        <div className="p-2 bg-white/5 rounded-lg text-white/20">
                                            <Sparkles size={14} />
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mt-2">
                                        <div className="flex flex-col">
                                            <span className="text-[8px] uppercase font-bold text-white/20 tracking-widest mb-0.5">Minted On</span>
                                            <span className="text-[10px] font-bold text-white/60 tracking-widest">{item.date}</span>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <span className="text-[8px] uppercase font-bold text-white/20 tracking-widest mb-0.5">Clearance</span>
                                            <span className="text-[10px] font-bold text-[#00FFFF] tracking-widest">{item.status}</span>
                                        </div>
                                    </div>

                                    {/* 3D Receipt visual effect */}
                                    <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Diamond size={120} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Access Menu */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                            { icon: Truck, label: "DROPS" },
                            { icon: Sparkles, label: "LUCKY" },
                            { icon: HelpCircle, label: "INTEL" },
                            { icon: LogOut, label: "SIGNAL OUT", color: "text-red-500" }
                        ].map((item, i) => (
                            <button key={i} className="flex flex-col items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-[#FF8C00]/10 hover:border-[#FF8C00]/30 transition-all active:scale-95">
                                <item.icon size={20} className={item.color || "text-[#FF8C00]"} />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

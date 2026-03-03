"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";
import React from "react";
import { useMaloti } from "@/context/MalotiContext";

export default function GlobalModals() {
    const { innerCircleOpen, setInnerCircleOpen } = useMaloti();

    const [memberKey, setMemberKey] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleSync = async () => {
        if (!memberKey) return;
        setLoading(true);
        try {
            // Check MP-FIN-01. Mocking auth logic with anonymous for simplicity if needed
            // Here we attempt to sign in or just save to state
            // Let's dynamically import to avoid SSR issues if used in Next.js
            const { auth } = await import("@/lib/firebase");
            const { signInAnonymously, updateProfile } = await import("firebase/auth");

            const cred = await signInAnonymously(auth);
            await updateProfile(cred.user, { displayName: `Member-${memberKey.slice(0, 4)}` });

            setInnerCircleOpen(false);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {innerCircleOpen && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                        onClick={() => setInnerCircleOpen(false)}
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg bg-[#1a1612] border-2 border-[#FF8C00] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,140,0,0.3)]"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent animate-pulse" />

                        <div className="p-8 flex flex-col items-center text-center">
                            <div className="size-16 bg-[#26201a] border border-[#FF8C00]/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,140,0,0.2)]">
                                <ShieldCheck size={32} className="text-[#FF8C00]" />
                            </div>

                            <h2 className="text-2xl font-black text-white uppercase tracking-[0.2em] mb-2">Inner Circle Exclusive</h2>
                            <p className="text-[#cbb290] text-sm mb-8 max-w-xs uppercase tracking-widest opacity-80">
                                This asset requires a level 3 clearance or a "Member Key" sync.
                            </p>

                            <div className="w-full space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="ENTER MEMBER KEY / EMAIL"
                                        value={memberKey}
                                        onChange={(e) => setMemberKey(e.target.value)}
                                        className="w-full bg-black/40 border border-[#FF8C00]/20 rounded-lg py-4 px-4 text-center text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF8C00] tracking-[0.5em] font-bold text-sm"
                                    />
                                </div>
                                <button
                                    onClick={handleSync}
                                    disabled={loading}
                                    className="w-full bg-[#FF8C00] text-black font-black uppercase py-4 rounded-lg tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg disabled:opacity-50"
                                >
                                    {loading ? "SYNCING..." : "IDENTITY SYNC"}
                                </button>
                            </div>

                            <button
                                onClick={async () => {
                                    try {
                                        const { auth, db } = await import("@/lib/firebase");
                                        const { signInWithPopup, GoogleAuthProvider } = await import("firebase/auth");
                                        const { doc, setDoc } = await import("firebase/firestore");

                                        const cred = await signInWithPopup(auth, new GoogleAuthProvider());
                                        const user = cred.user;

                                        await setDoc(doc(db, "users", user.uid), {
                                            email: user.email,
                                            displayName: user.displayName,
                                            memberStatus: "Inner Circle",
                                            lastLoginAt: new Date().toISOString()
                                        }, { merge: true });

                                        setInnerCircleOpen(false);
                                    } catch (e) { console.error("Google Sign-In Error", e) }
                                }}
                                className="mt-8 w-full cursor-pointer flex items-center justify-center gap-3 rounded-lg h-14 px-8 text-white text-base font-extrabold tracking-widest uppercase transition-all transform hover:scale-[1.02] focus:outline-none border hover:bg-white/10"
                                style={{ background: "rgba(0,0,0,0.4)", borderColor: "#E5E5E5" }}
                            >
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 bg-white rounded-full p-0.5" />
                                Sign in with Google
                            </button>
                        </div>

                        <button
                            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                            onClick={() => setInnerCircleOpen(false)}
                        >
                            <X size={20} />
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

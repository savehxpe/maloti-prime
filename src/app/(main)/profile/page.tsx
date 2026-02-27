import type { Metadata } from "next";
import { Diamond, Shield, Truck, Sparkles, HelpCircle, LogOut, ChevronRight } from "lucide-react";
import DeliveryTracker from "@/components/DeliveryTracker";

export const metadata: Metadata = {
    title: "Profile — Maloti Prime",
    description: "Your Maloti Prime member profile.",
};

const menuItems = [
    { icon: Shield, label: "Account Security", desc: "Manage authentication & privacy" },
    { icon: Truck, label: "Delivery Preferences", desc: "Maseru residential & business drops" },
    { icon: Sparkles, label: "Inner Circle Membership", desc: "Elite tier rewards & tracking" },
    { icon: HelpCircle, label: "Help/Support", desc: "24/7 Concierge & MP hotline" },
];

export default function ProfilePage() {
    return (
        <main className="flex-1 flex justify-center py-8 px-4 lg:px-12" style={{ background: "#0a0806" }}>
            <div className="flex flex-col w-full max-w-[640px] gap-8">
                {/* Profile Header */}
                <div className="flex flex-col items-center gap-4 pt-8">
                    <div className="size-24 rounded-full p-[2px]"
                        style={{ background: "linear-gradient(135deg, #f49d25, #D4AF37)" }}
                    >
                        <div className="flex h-full w-full items-center justify-center rounded-full"
                            style={{ background: "#1a1612" }}
                        >
                            <Diamond size={36} style={{ color: "#D4AF37" }} />
                        </div>
                    </div>

                    <div className="text-center">
                        <h1 className="text-white text-2xl font-bold mb-1">Inner Circle Member</h1>
                        <p className="text-sm" style={{ color: "#cbb290" }}>Premium Access • Maseru, Lesotho</p>
                    </div>

                    {/* Membership Badge */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border"
                        style={{ background: "rgba(244,157,37,0.1)", borderColor: "rgba(244,157,37,0.2)" }}
                    >
                        <Diamond size={14} style={{ color: "#D4AF37" }} />
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#D4AF37" }}>
                            Gold Member
                        </span>
                    </div>
                </div>

                {/* Delivery Tracker */}
                <div className="mt-2">
                    <DeliveryTracker />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                    {[
                        { value: "12", label: "Orders" },
                        { value: "M3,200", label: "Total Spent" },
                        { value: "4.9★", label: "Rating" },
                    ].map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center p-4 rounded-xl border border-[#493922]/30"
                            style={{ background: "#1a1612" }}
                        >
                            <span className="text-xl font-bold" style={{ color: "#f49d25" }}>{stat.value}</span>
                            <span className="text-xs mt-1" style={{ color: "#cbb290" }}>{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Menu Items (Glassmorphic Settings) */}
                <div className="flex flex-col gap-3 mt-4">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.label}
                                className="flex items-center gap-5 p-5 rounded-2xl border transition-all hover:scale-[1.01] active:scale-[0.99] w-full text-left"
                                style={{
                                    background: "rgba(38, 32, 26, 0.4)", // Charcoal background
                                    borderColor: "rgba(229, 229, 229, 0.1)", // Subtle chrome border
                                    backdropFilter: "blur(20px)",
                                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)"
                                }}
                            >
                                <div className="p-3 rounded-xl border" style={{
                                    background: "rgba(229, 229, 229, 0.05)",
                                    borderColor: "rgba(229, 229, 229, 0.1)",
                                    color: "#E5E5E5" // Chrome icons
                                }}>
                                    <Icon size={22} strokeWidth={1.5} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-[#E5E5E5] font-bold tracking-wide">{item.label}</h3>
                                    <p className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>{item.desc}</p>
                                </div>
                                <ChevronRight size={18} style={{ color: "rgba(229, 229, 229, 0.3)" }} />
                            </button>
                        );
                    })}
                </div>

                {/* Sign Out */}
                <button className="flex items-center justify-center gap-2 py-3 rounded-xl border transition-colors hover:opacity-80 w-full"
                    style={{ borderColor: "rgba(239,68,68,0.2)", color: "#ef4444", background: "rgba(239,68,68,0.05)" }}
                >
                    <LogOut size={18} />
                    <span className="font-medium text-sm">Sign Out</span>
                </button>
            </div>
        </main>
    );
}

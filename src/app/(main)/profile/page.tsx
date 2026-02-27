import type { Metadata } from "next";
import { Diamond, Settings, CreditCard, MapPin, Bell, LogOut, ChevronRight } from "lucide-react";
import DeliveryTracker from "@/components/DeliveryTracker";

export const metadata: Metadata = {
    title: "Profile — Maloti Prime",
    description: "Your Maloti Prime member profile.",
};

const menuItems = [
    { icon: CreditCard, label: "Payment Methods", desc: "Manage your cards" },
    { icon: MapPin, label: "Delivery Addresses", desc: "Maseru, Lesotho" },
    { icon: Bell, label: "Notifications", desc: "Exclusive drops & offers" },
    { icon: Settings, label: "Settings", desc: "Account preferences" },
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

                {/* Menu Items */}
                <div className="flex flex-col gap-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.label}
                                className="flex items-center gap-4 p-4 rounded-xl border transition-colors hover:opacity-80 w-full text-left"
                                style={{ background: "#26201a", borderColor: "#493922" }}
                            >
                                <div className="p-2.5 rounded-lg" style={{ background: "rgba(244,157,37,0.1)", color: "#f49d25" }}>
                                    <Icon size={20} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-medium">{item.label}</h3>
                                    <p className="text-xs" style={{ color: "#cbb290" }}>{item.desc}</p>
                                </div>
                                <ChevronRight size={18} style={{ color: "#493922" }} />
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

import type { Metadata } from "next";
import { Diamond, BadgeCheck, Truck, Headphones, Store, UserRound, Mail, Phone, FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "Wholesale — Maloti Prime",
    description: "Become a distribution partner with Maloti Prime. Premium cannabis wholesale from Lesotho.",
};

const benefits = [
    {
        icon: BadgeCheck,
        title: "Certified Quality",
        desc: "Lab-tested, organic cultivation adhering to international standards.",
    },
    {
        icon: Truck,
        title: "Secure Logistics",
        desc: "Discreet, temperature-controlled shipping ensuring product integrity.",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        desc: "Dedicated concierge service for all our B2B partners.",
    },
];

export default function WholesalePage() {
    return (
        <main className="flex-1 flex justify-center py-5 lg:py-10" style={{ background: "#1a1612" }}>
            <div className="flex flex-col w-full max-w-[1024px] px-4 md:px-6 lg:px-0">
                {/* Hero */}
                <div className="mb-12 rounded-2xl overflow-hidden relative flex flex-col items-center justify-center p-6 md:p-12 min-h-[400px] md:min-h-[480px]"
                    style={{ background: "linear-gradient(135deg, #26201a 0%, #1a1612 50%, #26201a 100%)" }}
                >
                    <div className="absolute inset-0 pointer-events-none"
                        style={{ background: "linear-gradient(to bottom, rgba(26,22,18,0.8), rgba(26,22,18,0.6), rgba(26,22,18,0.9))" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-5">
                        <span className="text-[200px]">🌿</span>
                    </div>

                    <div className="relative z-10 flex flex-col gap-4 text-center max-w-2xl">
                        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full border mx-auto mb-2"
                            style={{ background: "rgba(58,48,36,0.5)", borderColor: "rgba(244,157,37,0.2)", backdropFilter: "blur(8px)" }}
                        >
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#f49d25" }} />
                            <span className="text-xs font-bold tracking-wider uppercase" style={{ color: "#f49d25" }}>
                                B2B Exclusive
                            </span>
                        </div>

                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                            Wholesale <span className="gold-gradient-text">Partnerships</span>
                        </h1>
                        <h2 className="text-base md:text-lg font-normal leading-relaxed" style={{ color: "#cbd5e1" }}>
                            Elevate your dispensary with the finest cannabis cultivated in the heart of Lesotho. Join our exclusive network of premium retailers and access our reserve collection.
                        </h2>
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-4 justify-center mt-6">
                        <button className="flex items-center justify-center rounded-lg h-12 px-8 text-base font-bold transition-all shadow-lg"
                            style={{ background: "#f49d25", color: "#1a1612", boxShadow: "0 4px 20px rgba(244,157,37,0.3)" }}
                        >
                            Explore Catalog
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-12 px-8 text-white border text-base font-bold transition-all"
                            style={{ background: "rgba(58,48,36,0.4)", borderColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)" }}
                        >
                            Read Requirements
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    {/* Left: Benefits */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div>
                            <h3 className="text-white text-2xl font-bold leading-tight mb-4 flex items-center gap-2">
                                <Diamond size={22} style={{ color: "#f49d25" }} />
                                Why Partner With Us?
                            </h3>
                            <p className="leading-relaxed mb-6" style={{ color: "#cbb290" }}>
                                We provide more than just product; we provide a legacy of quality. Our wholesale partners benefit from priority access to limited batches, marketing support, and dedicated account management.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {benefits.map((b) => {
                                const Icon = b.icon;
                                return (
                                    <div key={b.title} className="flex gap-4 p-4 rounded-xl border"
                                        style={{ background: "#26201a", borderColor: "#3a3024" }}
                                    >
                                        <div className="p-3 rounded-lg h-fit"
                                            style={{ background: "rgba(244,157,37,0.1)", color: "#f49d25" }}
                                        >
                                            <Icon size={22} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-1">{b.title}</h4>
                                            <p className="text-sm" style={{ color: "#cbb290" }}>{b.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl p-6 md:p-8 border shadow-2xl relative overflow-hidden"
                            style={{ background: "#26201a", borderColor: "rgba(244,157,37,0.2)", boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}
                        >
                            {/* Decorative glow */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full pointer-events-none"
                                style={{ background: "rgba(244,157,37,0.15)", filter: "blur(100px)" }}
                            />

                            <div className="mb-8">
                                <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-2">
                                    Become a Distribution Partner
                                </h2>
                                <p className="text-sm" style={{ color: "#cbb290" }}>
                                    Fill out the form below and our wholesale director will contact you within 24 hours.
                                </p>
                            </div>

                            <form className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-white text-sm font-medium">Business Name</span>
                                        <div className="relative group">
                                            <input
                                                className="w-full rounded-lg border p-3 pl-10 h-12 transition-all outline-none text-white focus:ring-1"
                                                style={{ background: "#3a3024", borderColor: "#3a3024", color: "#fff" }}
                                                placeholder="Enter business name"
                                                type="text"
                                            />
                                            <Store size={18} className="absolute left-3 top-3.5" style={{ color: "#cbb290" }} />
                                        </div>
                                    </label>

                                    <label className="flex flex-col gap-2">
                                        <span className="text-white text-sm font-medium">Contact Person</span>
                                        <div className="relative group">
                                            <input
                                                className="w-full rounded-lg border p-3 pl-10 h-12 transition-all outline-none text-white focus:ring-1"
                                                style={{ background: "#3a3024", borderColor: "#3a3024", color: "#fff" }}
                                                placeholder="Full Name"
                                                type="text"
                                            />
                                            <UserRound size={18} className="absolute left-3 top-3.5" style={{ color: "#cbb290" }} />
                                        </div>
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-white text-sm font-medium">Email Address</span>
                                        <div className="relative group">
                                            <input
                                                className="w-full rounded-lg border p-3 pl-10 h-12 transition-all outline-none text-white focus:ring-1"
                                                style={{ background: "#3a3024", borderColor: "#3a3024", color: "#fff" }}
                                                placeholder="name@company.com"
                                                type="email"
                                            />
                                            <Mail size={18} className="absolute left-3 top-3.5" style={{ color: "#cbb290" }} />
                                        </div>
                                    </label>

                                    <label className="flex flex-col gap-2">
                                        <span className="text-white text-sm font-medium">Phone Number</span>
                                        <div className="relative group">
                                            <input
                                                className="w-full rounded-lg border p-3 pl-10 h-12 transition-all outline-none text-white focus:ring-1"
                                                style={{ background: "#3a3024", borderColor: "#3a3024", color: "#fff" }}
                                                placeholder="+266 ..."
                                                type="tel"
                                            />
                                            <Phone size={18} className="absolute left-3 top-3.5" style={{ color: "#cbb290" }} />
                                        </div>
                                    </label>
                                </div>

                                <label className="flex flex-col gap-2">
                                    <span className="text-white text-sm font-medium">Business Inquiry Details</span>
                                    <div className="relative group">
                                        <textarea
                                            className="w-full rounded-lg border p-3 pl-10 min-h-[120px] transition-all outline-none resize-none text-white focus:ring-1"
                                            style={{ background: "#3a3024", borderColor: "#3a3024", color: "#fff" }}
                                            placeholder="Tell us about your dispensary and estimated monthly volume..."
                                        />
                                        <FileText size={18} className="absolute left-3 top-3.5" style={{ color: "#cbb290" }} />
                                    </div>
                                </label>

                                <div className="pt-2">
                                    <button
                                        type="button"
                                        className="w-full cursor-pointer flex items-center justify-center rounded-lg h-12 px-6 text-base font-bold shadow-lg transition-all transform hover:-translate-y-0.5"
                                        style={{
                                            background: "linear-gradient(to right, #f49d25, #eab308)",
                                            color: "#1a1612",
                                            boxShadow: "0 4px 20px rgba(244,157,37,0.3)",
                                        }}
                                    >
                                        Partner with Us
                                    </button>
                                    <p className="text-center text-xs mt-4" style={{ color: "#cbb290" }}>
                                        By submitting this form, you agree to our{" "}
                                        <a href="#" className="hover:underline" style={{ color: "#f49d25" }}>Terms of Service</a>{" "}
                                        and{" "}
                                        <a href="#" className="hover:underline" style={{ color: "#f49d25" }}>Privacy Policy</a>.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

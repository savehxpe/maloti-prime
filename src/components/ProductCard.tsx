import { Heart } from "lucide-react";

interface ProductCardProps {
    name: string;
    type: string;
    terpene: string;
    price: number;
    badge?: string;
}

export default function ProductCard({
    name,
    type,
    terpene,
    price,
    badge = "Premium",
}: ProductCardProps) {
    const gradients = [
        "linear-gradient(135deg, #064e3b, #065f46, #064e3b)",
        "linear-gradient(135deg, #4c1d95, #5b21b6, #4c1d95)",
        "linear-gradient(135deg, #365314, #3f6212, #365314)",
        "linear-gradient(135deg, #134e4a, #115e59, #134e4a)",
        "linear-gradient(135deg, #78350f, #92400e, #78350f)",
        "linear-gradient(135deg, #312e81, #3730a3, #312e81)",
    ];
    const idx = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % gradients.length;

    return (
        <div className="group flex flex-col cursor-pointer">
            <div className="relative overflow-hidden mb-4 rounded-lg" style={{ aspectRatio: "3/4", background: "#26201a" }}>
                {/* Badge */}
                <div className="absolute top-4 left-0 z-10 px-3 py-1 text-[10px] font-black tracking-widest uppercase shadow-lg"
                    style={{ background: "#D4AF37", color: "#1a1612" }}
                >
                    {badge}
                </div>

                {/* Favorite */}
                <div className="absolute top-4 right-4 z-10">
                    <button className="p-2 rounded-full text-white transition-colors hover:opacity-80"
                        style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}
                    >
                        <Heart size={16} />
                    </button>
                </div>

                {/* Gradient placeholder */}
                <div
                    className="w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                    style={{ background: gradients[idx] }}
                >
                    <span className="text-6xl opacity-20">🌿</span>
                </div>

                {/* Hover action */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <button className="w-full text-white font-bold text-xs py-3 px-4 uppercase tracking-widest transition-colors shadow-lg rounded-md hover:text-black hover:bg-white"
                        style={{ background: "#f49d25" }}
                    >
                        Add to Delivery
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center text-center gap-1">
                <h3 className="text-white text-lg font-medium tracking-wide uppercase transition-colors group-hover:opacity-80">
                    {name}
                </h3>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#cbb290" }}>
                    {type} • {terpene} • R{price.toFixed(2)}/g
                </p>
                <span className="text-sm font-bold" style={{ color: "#D4AF37" }}>
                    R{price.toFixed(2)}
                </span>
            </div>
        </div>
    );
}

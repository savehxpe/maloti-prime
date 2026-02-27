"use client";

import { motion } from 'framer-motion';
import OutworldRenderer from './OutworldRenderer';

const strains = [
    { id: 1, name: "Maloti Gold", tier: "Standard", price: 100, type: "Sativa", image: "/images/strain_maloti_gold.png" },
    { id: 2, name: "Mahase", tier: "Premium", price: 140, type: "Hybrid", image: "/images/strain_mahase.png" },
    { id: 3, name: "Highland Kush", tier: "Reserve", price: 180, type: "Indica", image: "/images/strain_highland_kush.png" },
    { id: 4, name: "Moberry", tier: "Premium", price: 150, type: "Hybrid", image: "/images/strain_moberry.png" },
    { id: 5, name: "Outworld Reserve", tier: "Reserve", price: 200, type: "Indica", image: "/images/product_outworld_reserve.png" },
    { id: 6, name: "Maseru Midnight", tier: "Standard", price: 100, type: "Indica", image: "/images/strain_purple_1772159018919.png" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Rule 047: Staggered load
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BoutiqueGrid = () => {
    return (
        <section className="px-6 py-12 bg-[#121212]">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12">
                    <h2 className="text-2xl font-bold tracking-[0.4em] text-[#E5E5E5] uppercase">
                        The <span className="text-[#FF8C00]">Boutique</span>
                    </h2>
                    <div className="h-[1px] w-24 bg-[#00FFFF] mt-2 opacity-50" />
                </header>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {strains.map((strain) => (
                        <motion.div
                            key={strain.id}
                            variants={cardVariants}
                            whileHover={{ y: -5, scale: 1.02 }} // Rule 048: Hover-lift
                            className={`relative overflow-hidden bg-white/5 backdrop-blur-md rounded-lg border-[1px] p-4 transition-all
                ${strain.tier === 'Reserve' ? 'border-[#FF8C00]/40 drop-shadow-[0_0_10px_rgba(255,140,0,0.2)]' :
                                    strain.tier === 'Premium' ? 'border-[#00FFFF]/40' : 'border-white/10'}`}
                        >
                            {/* High-res Image Placeholder with Aspect Ratio Control */}
                            <div className="relative aspect-square sm:aspect-[4/5] mb-4 rounded-lg bg-black/20 overflow-hidden border border-white/5">
                                {strain.image ? (
                                    <img
                                        src={strain.image}
                                        alt={strain.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center opacity-20">
                                        <OutworldRenderer tier={strain.tier} />
                                    </div>
                                )}

                                {strain.tier === 'Reserve' && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#FF8C00]/20 to-transparent pointer-events-none" />
                                )}
                            </div>

                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-sm tracking-widest text-[#E5E5E5] font-bold uppercase">{strain.name}</h3>
                                    <p className="text-[10px] text-gray-500 tracking-[0.2em]">{strain.type}</p>
                                </div>
                                <span className="text-xs font-bold text-[#FF8C00]">R {strain.price}</span>
                            </div>

                            {/* Rule 079: Auth-Gate for Reserve Tier */}
                            <button
                                onClick={() => strain.tier === 'Reserve' && console.log("Trigger ReserveGuard.tsx")}
                                className={`w-full py-3 text-[10px] tracking-[0.3em] font-bold uppercase transition-all
                  ${strain.tier === 'Reserve' ? 'bg-[#FF8C00] text-black hover:bg-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
                            >
                                {strain.tier === 'Reserve' ? 'Verify Access' : 'Add to Cart'}
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BoutiqueGrid;

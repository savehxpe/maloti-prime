import type { Metadata } from "next";
import BoutiqueGrid from "@/components/BoutiqueGrid";

export const metadata: Metadata = {
    title: "The Boutique — Maloti Prime",
    description: "Explore Maloti Prime's premium indoor strains collection. Curated cannabis for the discerning connoisseur.",
};

export default function BoutiquePage() {
    return (
        <main className="flex flex-1 flex-col py-8" style={{ background: "#121212" }}>
            <BoutiqueGrid />
        </main>
    );
}

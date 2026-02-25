import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col" style={{ background: "#1a1612" }}>
            <Header />
            <div className="flex-1 pb-20">{children}</div>
            <BottomNav />
        </div>
    );
}

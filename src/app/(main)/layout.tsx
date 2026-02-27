import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Sidebar from "@/components/Sidebar";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex" style={{ background: "#0a0806" }}>
            {/* Desktop Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
                {/* Search/User Header (Can be hidden on lg if needed, but useful for search) */}
                <div className="lg:hidden">
                    <Header />
                </div>
                {/* Desktop Header for Search/User */}
                <div className="hidden lg:block">
                    <Header />
                </div>

                <div className="flex-1 pb-24 lg:pb-0">
                    {children}
                </div>

                {/* Mobile Bottom Navigation */}
                <div className="lg:hidden">
                    <BottomNav />
                </div>
            </div>
        </div>
    );
}

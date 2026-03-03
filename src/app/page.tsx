"use client";

import { useRouter } from "next/navigation";
import { Diamond, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function LandingPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  // Data-catching logic
  const handleJoin = () => {
    if (!name || !email) return;
    // Data-Catching: save to local storage
    localStorage.setItem("malotiPrimeUser", JSON.stringify({ name, email, joinedAt: new Date().toISOString() }));
    // Navigate to experience
    router.push("/home");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, #1a1612 0%, #26201a 40%, #1a1612 70%, rgba(73,57,34,0.3) 100%)",
        }} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(244,157,37,0.06) 0%, transparent 60%)"
        }} />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between border-b px-6 py-4 lg:px-12"
        style={{ borderColor: "rgba(212,175,55,0.1)", background: "rgba(26,22,18,0.5)", backdropFilter: "blur(12px)" }}
      >
        <div className="flex items-center gap-3">
          <div className="size-8 flex items-center justify-center rounded-full border"
            style={{ background: "rgba(212,175,55,0.1)", borderColor: "rgba(212,175,55,0.2)" }}
          >
            <Diamond size={18} style={{ color: "#D4AF37" }} />
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-wide uppercase">
            Maloti Prime
          </h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-12 lg:py-20">
        <div className="flex flex-col max-w-[640px] w-full items-center text-center animate-fade-in-up">
          {/* Diamond Icon */}
          <div className="mb-8 size-24 rounded-full p-[2px] shadow-gold-glow"
            style={{ background: "linear-gradient(135deg, #D4AF37, #b87315, #D4AF37)" }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full"
              style={{ background: "#26201a" }}
            >
              <Diamond size={48} style={{ color: "#D4AF37" }} />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-2 drop-shadow-2xl">
            <span className="block text-lg md:text-xl font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#D4AF37" }}
            >
              Welcome to
            </span>
            Maloti Prime
          </h1>

          <p className="text-lg md:text-xl font-light tracking-wide mb-8" style={{ color: "#cbd5e1" }}>
            Lesotho&apos;s First Premium Cannabis Ecosystem
          </p>

          {/* Age Verification Card */}
          <div className="relative overflow-hidden border p-8 rounded-xl w-full max-w-lg shadow-2xl mb-10"
            style={{ background: "rgba(38,32,26,0.8)", borderColor: "rgba(212,175,55,0.1)", backdropFilter: "blur(12px)" }}
          >
            <div className="absolute top-0 left-0 w-full h-1"
              style={{ background: "linear-gradient(to right, transparent, #f49d25, transparent)", opacity: 0.5 }}
            />

            {!showForm ? (
              <>
                <ShieldCheck size={40} className="mx-auto mb-4" style={{ color: "#D4AF37" }} />
                <h2 className="text-white text-xl md:text-2xl font-bold mb-3">
                  Age Verification Required
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
                  Access is reserved for adults 21 years or older. By entering, you confirm that you meet the age requirement and agree to our{" "}
                  <a href="#" className="underline underline-offset-4 transition-colors" style={{ color: "#f49d25" }}>
                    Terms of Service
                  </a>{" "}
                  &amp;{" "}
                  <a href="#" className="underline underline-offset-4 transition-colors" style={{ color: "#f49d25" }}>
                    Privacy Policy
                  </a>.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-3">
                  Join The Inner Circle
                </h2>
                <p className="text-sm mb-6" style={{ color: "#94a3b8" }}>
                  Get early access, exclusive drops, and member-only pricing.
                </p>
                <div className="flex flex-col gap-4 mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg px-4 py-3 text-white border focus:outline-none focus:ring-1 text-sm"
                    style={{ background: "rgba(0,0,0,0.3)", borderColor: "rgba(255,255,255,0.1)" }}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg px-4 py-3 text-white border focus:outline-none focus:ring-1 text-sm"
                    style={{ background: "rgba(0,0,0,0.3)", borderColor: "rgba(255,255,255,0.1)" }}
                  />
                </div>
              </>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-6 w-full max-w-sm">
            {!showForm ? (
              <button
                onClick={() => setShowForm(true)}
                className="w-full cursor-pointer flex items-center justify-center rounded-lg h-14 px-8 text-white text-base font-extrabold tracking-widest uppercase shadow-orange-glow transition-all transform hover:scale-[1.02] focus:outline-none border"
                style={{ background: "#f49d25", borderColor: "rgba(244,157,37,0.5)" }}
              >
                Join The Inner Circle
              </button>
            ) : (
              <button
                onClick={() => setShowForm(false)}
                className="w-full cursor-pointer flex items-center justify-center rounded-lg h-14 px-8 text-white text-base font-extrabold tracking-widest uppercase shadow-orange-glow transition-all transform hover:scale-[1.02] focus:outline-none border"
                style={{ background: "#f49d25", borderColor: "rgba(244,157,37,0.5)" }}
              >
                Submit &amp; Join
              </button>
            )}

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

                  router.push("/home");
                } catch (error) {
                  console.error("Google Sign-In Error", error);
                }
              }}
              className="w-full cursor-pointer flex items-center justify-center gap-3 rounded-lg h-14 px-8 text-white text-base font-extrabold tracking-widest uppercase transition-all transform hover:scale-[1.02] focus:outline-none border hover:bg-white/10"
              style={{ background: "rgba(0,0,0,0.4)", borderColor: "#E5E5E5" }}
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 bg-white rounded-full p-0.5" />
              Sign in with Google
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t px-6 py-8"
        style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(26,22,18,0.9)", backdropFilter: "blur(16px)" }}
      >
        <div className="mx-auto flex max-w-[960px] flex-col gap-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["Privacy Policy", "Terms of Service", "Contact Us", "Locations"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs font-medium uppercase tracking-wider transition-colors hover:opacity-80"
                style={{ color: "#64748b" }}
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-xs font-normal" style={{ color: "#475569" }}>
            © 2025 Maloti Prime. All rights reserved. Use Responsibly.
          </p>
        </div>
      </footer>
    </div>
  );
}

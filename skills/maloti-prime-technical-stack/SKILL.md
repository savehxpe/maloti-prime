---
name: maloti-prime-technical-stack
description: Full-stack protocol for Next.js, Tailwind CSS, and Framer Motion integration.
---

# 🛸 MALOTI PRIME TECH PROTOCOL (MP-TECH-01)

## [001-020] CORE FRAMEWORK ARCHITECTURE
001. FRAMEWORK: Next.js 14+ (App Router is mandatory).
002. STYLING: Tailwind CSS (Utility-first, zero custom CSS files).
003. ANIMATION: Framer Motion (State-driven transitions).
004. LANGUAGE: TypeScript (Strict mode enabled for "Physical Truth").
005. DIRECTORY: `/components` (Global), `/app` (Routes), `/lib` (Logic), `/public` (Assets).
006. REPOSITORY: https://github.com/savehxpe/maloti-prime
007. DEPLOYMENT: Vercel (Automatic branch-to-prod pipeline).
008. MOBILE-FIRST: All Tailwind classes must prioritize `sm:` and `md:` breakpoints last.
009. FONT: Primary: 'Orbitron' (Headers), Secondary: 'Inter' (Body).
010. THEME: Forced Dark Mode. Background: #121212 (Charcoal).

## [021-045] TAILWIND DESIGN SYSTEM (FIELD MODE)
021. COLOR-PRIMARY: `text-[#FF8C00]` (Sunset Orange 🧡🍊).
022. COLOR-ACCENT: `text-[#00FFFF]` (Cyber Cyan).
023. COLOR-CHROME: `text-[#E5E5E5]` (Metal finish).
024. BORDER-STYLE: `border-[1px] border-white/10`.
025. GLASS-EFFECT: `bg-white/5 backdrop-blur-md`.
026. GLOW-ORANGE: `drop-shadow-[0_0_15px_rgba(255,140,0,0.5)]`.
027. GLOW-CYAN: `drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]`.
028. BUTTON-BASE: `px-6 py-3 uppercase tracking-widest text-xs font-bold transition-all`.
029. BUTTON-ACTIVE: `bg-[#FF8C00] text-black hover:scale-105 active:scale-95`.
030. INPUT-BASE: `bg-[#1a1a1a] border-[#E5E5E5]/20 focus:border-[#FF8C00] outline-none`.

## [046-075] FRAMER MOTION KINETICS
046. PAGE-TRANSITION: `initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}`.
047. STAGGER-LOAD: Use `staggerChildren: 0.1` for the Boutique strain grid.
048. HOVER-LIFT: `whileHover={{ y: -5, scale: 1.02 }}` for product cards.
049. SPLASH-LOGO: `animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }}`.
050. GESTURE-TAP: `whileTap={{ scale: 0.95 }}` on all call-to-action buttons.
051. SCROLL-REVEAL: Use `whileInView` for "Physical Truth" data points.
052. MODAL-ANIM: `initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}` for Mobile.

## [076-105] RECURSIVE BUSINESS LOGIC (R100-R180)
076. TIER-STANDARD: Price: 100 | Label: "Latu Gold" | Border: Chrome.
077. TIER-PREMIUM: Price: 140 | Label: "Highland Frost" | Border: Cyan Glow.
078. TIER-RESERVE: Price: 180 | Label: "Outworld Reserve" | Border: Orange Pulse.
079. AUTH-GATE: If `tier === 180`, trigger `ReserveGuard.tsx` on Click.
080. DATA-CATCH: Log `user_intent` on every card interaction to `.context/logs`.
081. WHOLESALE-LOGIC: If `session.type === 'B2B'`, hide prices and show `InquiryForm`.
082. CURRENCY: Always render as `R {price}` or `LSL {price}`.
083. DELIVERY-HUD: Map `driver_location` to a 3D topographical Maseru mesh.

## [106-130] ERROR SHIELD & DEPLOYMENT RULES
106. LINT-CHECK: Run `npm run lint` before any `git push`.
107. BUILD-VERIFY: `next build` must pass locally.
108. JET-HUB-SYNC: `git push origin main` is the only valid deployment trigger.
109. VERCEL-ENV: Ensure `NEXT_PUBLIC_LATU_API` is set in the dashboard.
110. LOG-CLEANUP: Remove all `console.log` from production builds.
111. ASSET-OPTIM: All images must use `next/image` for WebP conversion.
112. RECURSIVE-HEALTH: If build fails, scan `next.config.ts` for `ignoreBuildErrors` and delete it.
113. COMMIT-MSG: Format: `[MODULENAME] Description` (e.g. `[BOUTIQUE] Added R180 Pulse`).
114. FINAL-TRUTH: If code is not "Field Mode" compliant, revert to last Chrome state.

---
# [DEPLOYMENT COMMAND]
> "Antigravity, compile 130-line MP-TECH-01 protocol. Sync with Jet Hub repo savehxpe/maloti-prime. Execute build sequence."
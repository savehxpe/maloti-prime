---
name: maloti-prime-core-engine
description: Premium cannabis ecosystem protocol for Lesotho; dark-luxury "Field Mode" aesthetics with integrated Latu-Live tracking.
---

# MALOTI PRIME OPERATIONAL PROTOCOLS

## 1. Cinematic Entry & Branding
- **Splash Sequence**: On app initialization, trigger a 2-second `motion.div` animation.
  - **Visual**: The Maloti Prime logo transitions from a #E5E5E5 (Chrome) wireframe to a full #FF8C00 (Sunset Orange) glow.
  - **Logic**: Route to `/home` only after the `onAnimationComplete` cycle.

## 2. "Latu-Live" Tactical Tracking
- **Interactive Map**: Map the `deliveryStatus` to a dark-mode vector map of Maseru/Latu.
  - **Logic**: If `status === 'in-transit'`, render a neon Cyan (#00FFFF) path from the cultivation hub to the user's coordinates.
  - **Status HUD**: Display military-grade updates: "Package Secured," "Transit: Kingsway Rd," "Arrival Imminent."

## 3. Boutique Retail Logic (R100-R180)
- **Pricing Tiers**: Hard-code the pricing tiers into the `ProductCard.tsx` component.
  - **Standard**: R100 (Grey Border)
  - **Premium**: R140 (Orange Border)
  - **Reserve**: R180 (Pulsing Gold/Orange Glow)
- **Gatekeeping**: Any interaction with the 'Reserve' tier must trigger the "Verify Access to the Kingdom’s Reserve" modal (Username/Pass entry).

## 4. Wholesale & B2B Portal
- **Consortium Interaction**: When a user selects 'Wholesale', hide all retail prices and replace 'Add to Cart' with 'Partner with the Source'.
- **Inquiry Logic**: Tapping the button opens a professional lead-capture form for bulk distribution in Lesotho.

## 5. Deployment Health (Vercel/GitHub)
- **Clean Build**: Ensure `next.config.ts` is stripped of `ignoreBuildErrors` before the `git push` to the jet hub repository.
- **Visual Check**: Every component must pass the "Field Mode" test: High-contrast dark mode, 12px background blurs, and chrome accents.
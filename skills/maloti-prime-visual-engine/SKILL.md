---
name: maloti-prime-visual-engine
description: Nano Banana 2 generation protocols for Outworld/Field Mode assets.
---

# 🎨 NANO BANANA GENERATION PROTOCOLS

## 1. Product Asset Rules (The R100-R180 Look)
- **Prompt Base**: "High-fidelity, cinematic macro shot of a premium cannabis flower, floating in zero-gravity. Style: Cyberpunk / Outworld. Lighting: Cyber Cyan rim light, Sunset Orange key light. Background: Blurred dark charcoal studio, chrome accents. 8k resolution, Unreal Engine 5 render style."
- **Tier Variations**:
  - **Standard (R100)**: Focus on clean, natural greens with chrome highlights.
  - **Premium (R140)**: Add subtle cyan crystal trichomes and a glowing aura.
  - **Reserve (R180)**: Intense orange "Sunset" glow, floating gold particles, and deep glassmorphic textures.

## 2. Page-Specific Backgrounds
- **Home/Hero**: "Aerial view of a futuristic Maseru, Lesotho at night. Dark charcoal mountains, neon orange and cyan grid lines glowing in the valley. Cinematic, wide-angle, Outworld aesthetic."
- **Wholesale**: "High-tech industrial cultivation lab, chrome vats, cyan holographic data floating in the air. Clean, professional, futuristic luxury."
- **Delivery Tracker**: "Topographical 3D map of Lesotho with glowing neon orange paths. HUD elements, futuristic interface, dark mode."

## 3. Implementation Logic
- **Constraint**: Every generated image must be converted to `.webp` and stored in `/public/assets/generated/`.
- **Naming Convention**: `[Tier]_[StrainName]_NB2.webp` (e.g., `Reserve_Outworld_NB2.webp`).
- **Backup**: If an image generation fails, fallback to the **Chrome Wireframe** SVG from the Splash Loader.
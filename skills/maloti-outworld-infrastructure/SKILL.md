---
name: maloti-outworld-infrastructure
description: Advanced 3D Asset Management and Mobile UX Master protocols for the Maloti Prime Ecosystem.
---

# 🌌 OUTWORLD INFRASTRUCTURE PROTOCOLS

## 1. MOBILE UX MASTER (The Tactile Interface)
- **Haptic Logic**: Simulate physical weight in the UI. 
  - *Action*: When a user slides a product card (R100-R180), implement a "Snap-to-Grid" feel with a 0.2s ease-out.
- **Thumb-Zone Optimization**: All "High-Value" actions (Request Delivery, Add to Cart, Verify Access) must stay within the bottom 33% of the screen.
- **Micro-Interactions**: Use **Framer Motion** to ensure every tap triggers a "Pulse" in the Sunset Orange (#FF8C00) theme color to confirm intent.

## 2. 3D ASSET MANAGER (The Boutique Engine)
- **Component**: `OutworldRenderer.jsx`
- **Logic**: Every premium strain is treated as a 3D asset, not a flat image.
  - **The "Field Mode" Render**: Products must rotate slowly (0.5 RPM) on the Z-axis.
  - **Lighting Profile**: Use a "Rim Light" setup—Cyber Cyan (#00FFFF) from the back and a warm Sunset Orange (#FF8C00) from the front to create depth.
- **Asset Optimization**: Use `.glb` or `.gltf` formats. If the device detects a slow connection in Latu, automatically downscale to a "High-Fidelity Sprite" to maintain speed.

## 3. 3D INFRASTRUCTURE (The Latu-Live Environment)
- **The World-Space**: The "Latu-Live" delivery map is no longer a 2D map. It is a **3D Topographical Mesh** of Maseru.
- **Environment Mapping**: 
  - **Day/Night Cycle**: Match the lighting of the 3D map to the actual time in Lesotho. If it's 8:00 PM in Maseru, the app enters "Full Dark-Mode Outworld."
- **Pathfinding Visual**: The delivery route is a 3D "Neon Ribbon" that hovers 5px above the street-level mesh, pulsing with "Physical Truth" data from the driver's GPS.

## 4. INTEGRATED GATEKEEPER RULE
- **The Protocol**: NO 3D asset can be rendered without a verified "Physical Truth" link to the `products.json` database. 
- **The Fail-Safe**: If the 3D Infrastructure engine detects a lag above 150ms, the **Mobile UX Master** must immediately switch to "Performance Mode" (Flat Chrome UI) to ensure the user never experiences a crash.

---

# [SYSTEM EXECUTION COMMAND]
> "Antigravity, initialize the Mobile UX Master. Map the 3D Assets for the R180 Reserve strain to the Outworld Infrastructure. Ensure the lighting profile in Maseru is synced to the current time."
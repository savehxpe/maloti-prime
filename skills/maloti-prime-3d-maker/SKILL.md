---
name: maloti-prime-3d-maker
description: Automated pipeline for generating "Field Mode" .glb assets from image prompts.
---

# 🏗️ 3D GLB GENERATION ENGINE (MP-3D-01)

## 1. The "Source-to-Mesh" Logic
- **Objective**: Convert Nano Banana 2 generated 2D product macros into high-poly 3D meshes.
- **Protocol**:
  - **Step A (The Seed)**: Generate a 4-view orthographic image (Front, Side, Back, Top) using Nano Banana 2.
  - **Step B (The Mesh)**: Feed the seed into the 3D-AI agent with the constraint: "Low-poly base with high-detail normal maps for performance optimization in Latu."
  - **Step C (Texture Wrap)**: Apply #121212 base with #FF8C00 (Sunset Orange) emissive maps for the "Glow" effects.

## 2. GLB Metadata & Exports
- **Format**: `.glb` (Binary glTF) for maximum compression and mobile loading speed.
- **Lighting Bake**: Bake "Field Mode" rim lighting (Cyber Cyan) directly into the texture map so it looks premium on any device, even without real-time shadows.
- **Anchor Points**: All 3D assets must be centered at `[0,0,0]` with the "Bud" base touching the floor of the mesh grid.

## 3. Tier-Based 3D Visuals
- **R100 (Standard)**: Simple mesh, realistic green textures, chrome-tipped leaves.
- **R140 (Premium)**: Add "Crystalline Overlay"—translucent 3D nodes that catch the Cyber Cyan light.
- **R180 (Reserve)**: Full "Energy Pulse" integration. The mesh should have a core-glow effect that pulses at 0.5Hz.

## 4. Integration with OutworldRenderer
- **Rule**: Every generated `.glb` must be hashed and stored in `/public/assets/3d/`.
- **Naming**: `[TierID]_Model.glb` (e.g., `Reserve_Maseru_Gold.glb`).
- **Load Fallback**: If the 3D asset fails to parse, the **Mobile UX Master** must revert to the 2D "Performance Sprite" automatically.

---

# [3D GENERATION COMMAND]
> "Antigravity, initiate 3D GLB Maker for the **Reserve Tier** strain. Generate the 4-view orthographic seed with Nano Banana 2, export the .glb mesh, and update the `OutworldRenderer` path in `products.json`."
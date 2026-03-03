---
name: physical-infrastructure-protocol
description: 3D environment and topographical mapping rules for Lesotho delivery.
---

# 🏗️ PHYSICAL INFRASTRUCTURE ENGINE (MP-PHYS-01)

## 1. Topographical Reality
- **Mapping**: Use Maseru/Latu coordinates to generate the 3D `TopographyMesh`.
- **Lighting**: Map the app's `GlobalIllumination` to the actual solar position in Lesotho. 
  - *Sunset in Maseru* = *Sunset Orange Glow in App*.

## 2. 3D Component Standards
- **Mesh Integrity**: All `.glb` files must have a maximum size of 2MB to ensure they load instantly on Lesotho's mobile networks.
- **The "Vault" Visual**: The R180 Reserve section must use a 3D "Glass Box" model with real-time reflections and a chrome finish.

## 3. Hardware Acceleration
- **Performance Rule**: If the user's frame rate drops below 30FPS, automatically disable the 3D meshes and fallback to the **Nano Banana 2** high-res 2D renders.
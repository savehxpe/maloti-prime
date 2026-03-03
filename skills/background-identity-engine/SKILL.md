---
name: background-identity-engine
description: Manages the fixed, subtle background logo (watermark) across all portal pages.
---

# IDENTITY PERSISTENCE RULES
1. **The Watermark**: Place the 'Sovereign Diamond' logo as a `fixed` background element.
2. **Visual Specs**: 
   - Opacity: `0.03` to `0.05` (extremely subtle).
   - Position: Center-back or bottom-right.
   - Size: Large scale (`40vw` or `500px`) to act as a structural texture.
3. **Interactivity**: The logo should have `pointer-events: none` so it never interferes with clicks or 3D rotations.
4. **Adaptive Tone**: 
   - On dark pages: Use `white` with low opacity.
   - On light/glass pages: Use `black` with low opacity.
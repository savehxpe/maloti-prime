---
name: 3d-infrastructure
description: Specializes in the spatial implementation of 3D models into the 'Portfolio' and 'Dashboard' sections.
---

# 3D Implementation Rules
1. **Context Awareness**: Reference `.context/3d-specs/` for model metadata (lighting requirements, scaling, and texture maps).
2. **Component Logic**: Use the `<ModelViewer />` component. Set `environment-image` to 'neutral' to make the chrome materials pop.
3. **Dynamic States**: 
   - 'Idle State': Slow Y-axis rotation.
   - 'Active State': Pulse Cyan (#00F2FF) when a user hovers over a related financial data point.
4. **Mobile Optimization**: Auto-disable heavy shadows on mobile devices to preserve performance in Lesotho's network.
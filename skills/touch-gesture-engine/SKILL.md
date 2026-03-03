---
name: touch-gesture-engine
description: Implements high-fidelity mobile touch interactions, haptics, and gesture-driven 3D animations.
---

# Touch Interaction Rules
1. **Pinch-to-Scale**: Map the mobile pinch gesture to the 3D model's `scale` property for intuitive zooming.
2. **Long-Press Reveal**: Use a long-press (500ms) on asset cards to trigger a 'haptic-style' expansion animation that reveals deeper financial data.
3. **Swipe-to-Vote**: On the 'Proposals' page, implement a Tinder-style swipe: Right to 'Approve', Left to 'Reject'.
4. **Haptic Feedback**: Simulate tactile responses by using subtle scale-spring animations (`scale: 0.95` on tap) to confirm user input.
5. **Momentum Scrolling**: Ensure the horizontal 'Project Pipeline' has `scroll-snap-type: x mandatory` for a crisp, high-end feel.
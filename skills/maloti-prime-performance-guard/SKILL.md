---
name: maloti-prime-performance-guard
description: Strict technical constraints to ensure the app stays fast on Lesotho mobile networks.
---

# 🛡️ PERFORMANCE GUARD & CLEANUP (MP-PERF-01)

## 1. The "Latu-Speed" Constraint
- **Max Bundle Size**: The initial page load must be under 2.5MB. 
- **Logic**: Use `React.lazy` for the 3D **OutworldRenderer** so it only loads when the user is actually looking at a product.

## 2. Asset Purge
- **Protocol**: Any image not used in the last 3 deployments must be moved to an `/archive` folder or deleted to keep the Jet Hub repository lean.
- **Optimization**: All Nano Banana 2 generated assets must be converted to **AVIF** or **WebP** at 75% quality to save data for mobile users.

## 3. API Fail-Safe
- **Rule**: If the "Latu-Live" delivery API fails to respond within 3 seconds, the app must automatically display a static "Scheduled Delivery" message to prevent the UI from freezing.
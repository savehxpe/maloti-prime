---
name: maloti-prime-error-shield
description: Pre-deployment integrity checker for the Maloti Prime/Outworld ecosystem.
---

# 🛡️ ERROR SHIELD & INTEGRITY PROTOCOL

## 1. Environment & Build Safety (Vercel Prep)
- **Check: Config Hygiene**: Scan `next.config.ts` or `next.config.js`. 
  - *Requirement*: `ignoreBuildErrors` MUST be `false` or removed before production push.
- **Check: Dependency Audit**: Ensure no missing `node_modules` references that were lost during the "T7 Shield" storage cleanup.
- **Check: Build Command**: Verify that `npm run build` executes locally without "Type Errors" before the git push.

## 2. Brand & Logic Validation
- **Check: Price Integrity**: Verify that no product price falls outside the **R100 - R180** range. 
  - *Failure*: If a price is found at R0 or missing, halt the build.
- **Check: The Reserve Gate**: Ensure the `res-003` (Outworld Reserve) item is successfully linked to the `AuthGuard` component.
  - *Requirement*: No user should see the "Buy" button for Reserve without the "Inner Circle" login.

## 3. Visual "Field Mode" Audit
- **Check: Asset Paths**: Scan all `<img>` or `Image` tags.
  - *Failure*: Any broken placeholder or "image not found" results in a UI-reversion to the "Chrome" loading state.
- **Check: Color Constants**: Ensure all hex codes match the protocol:
  - Charcoal: `#121212`
  - Sunset Orange: `#FF8C00`
  - Cyber Cyan: `#00FFFF`

## 4. Deployment Pipeline (Jet Hub)
- **Check: Commit Message**: Commit messages must follow the convention: `[Status]: [Brief Description]` (e.g., `FIX: Resolved R180 Modal Overflow`).
- **Check: Sync Status**: Verify that the local `products.json` matches the version on the repository to prevent "Version Drift."

## 5. Automated Recovery
- **Action**: If a build error occurs on Vercel, Antigravity must automatically revert `next.config.ts` to the last "Verified Working" state and log the specific error in a `logs/build_error.txt` file.
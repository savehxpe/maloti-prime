---
name: maloti-prime-stability-shield
description: Hard-coded version control and LTS enforcement to prevent mobile crashes.
---

# 🛡️ STABILITY & LTS PROTOCOL (MP-STABLE-01)

## 1. Hard-Coded Dependency Lock
- **Requirement**: Antigravity is strictly forbidden from using "Beta" or "Experimental" versions. 
- **Approved Stack**:
  - **Next.js**: `14.2.x` or `15.0.x` (Stable LTS only).
  - **React**: `18.3.x` or `19.0.x` (Stable).
  - **Lucide-React**: `0.400.x` (Standard stable build).
  - **Framer-Motion**: `11.x.x` (Verified stability).

## 2. Cross-Device Verification
- **The "Investor Rule"**: The app must render perfectly on:
  - High-end iOS (Safari)
  - Mid-range Android (Chrome/Samsung Internet)
  - Low-bandwidth mobile networks in Lesotho.
- **Fail-Safe**: If a package version causes a `ReferenceError` or `Hydration Mismatch` on mobile, the **Recursive Intellect Engine** must automatically downgrade the package to the last known LTS.

## 3. Package.json Sanitization
- **Action**: Scan `package.json` for any versions that end in `-beta`, `-rc`, or are significantly ahead of the current Vercel-recommended stable builds.
- **Fix**: Revert to the versions specified in Section 1 of this protocol.

## 4. Documentation for Investors
- **The Pitch**: "We use an **Enterprise-Grade LTS Stack**. This ensures that the Maloti Prime platform is not just futuristic, but industry-standard and 100% reliable for high-volume transactions and delivery logistics."
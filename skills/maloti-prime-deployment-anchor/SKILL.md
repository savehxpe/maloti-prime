---
name: maloti-prime-deployment-anchor
description: Persistent deployment protocol for the Maloti Prime / Outworld ecosystem.
---

# ⚓ DEPLOYMENT ANCHOR PROTOCOLS

## 1. Target Repository Specification
- **Primary Repo**: `https://github.com/savehxpe/maloti-prime`
- **Branch Strategy**: 
  - All feature updates (`FEAT`) and fixes (`FIX`) must target the `main` branch.
  - Large-scale 3D infrastructure updates should move through a `dev` branch before merging to `main`.

## 2. Automated Sync Logic (Jet Hub)
- **Pre-Push Check**: Before every `git push`, the engine must verify the **Error Shield Protocol** to ensure the build is clean.
- **Push Command**: 
  ```bash
  git remote set-url origin [https://github.com/savehxpe/maloti-prime.git](https://github.com/savehxpe/maloti-prime.git)
  git add .
  git commit -m "[PROTOCOL EXECUTION]: Updated Maloti Prime Core Infrastructure"
  git push origin main
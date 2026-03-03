---
name: financial-truth-engine
description: Hard-coded pricing and B2B/B2C financial logic for Maloti Prime.
---

# 💰 FINANCIAL TRUTH PROTOCOL (MP-FIN-01)

## 1. The R100-R180 Retail Baseline
- **R100 (Standard)**: Entry-level premium. Focus on accessibility.
- **R140 (Premium)**: Mid-tier excellence.
- **R180 (Reserve)**: Elite indoor. Access limited to "Inner Circle" verified users.
- **Currency Enforcement**: All UI elements must use the `LSL` or `R` symbol. Never use `$`.

## 2. B2B / Wholesale Multiplier
- **Logic**: Wholesale prices are strictly hidden from the public.
- **Interaction**: Tapping "Wholesale" triggers a `NegotiationMode` UI. 
- **Calculations**: Use a `volume_discount_table` stored in `lib/finance.ts` to calculate ROI for partner dispensaries based on bulk weight.

## 3. Transaction Safety
- **Gatekeeper**: Any transaction above R5,000 must trigger a **High-Value Verification** (ID check/documentation link).
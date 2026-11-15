# Production designer — supplier asset and print specification register

Status: **prototype with production guardrails, NOT production approved**. Stripe and order placement remain disabled.

## Garment imagery
- Official AS Colour asset downloads: https://www.ascolour.com.au/downloads
- Official AS Colour Staple Tee 5001: https://www.ascolour.com.au/staple-tee-5001/
- Official product page links to a high-resolution product image library. Product photography has **not** been copied into this repository; check the AS Colour brand guidelines and secure permitted commercial usage first.
- Current garment drawing is an original CSS illustration and is NOT an accurate licensed photographic mockup.
- Heavy Tee, Relaxed Hoodie and Crew Sweat supplier SKU mapping, front/back/sleeve mockups and size/color variants are **not verified**. Do not imply supplier accuracy.

## Measurements and printing
- Official 5001 garment body sizing comes from AS Colour's size guide linked from the product page. Garment dimensions are NOT printable dimensions.
- Third-party decorator reference: https://www.inteliprint.com.au/ascolour_staple_tee_5001/ (full front/back 360 x 460 mm, sleeves 100 x 100 mm). These are **decorator-specific maxima**, not AS Colour standards or approved limits for Kingdom Kustoms.
- The remaining garment print profiles are illustrative estimates only and must not be used for production.
- Require production partner to sign off per SKU, colour, size, decoration method, print position, printable width/height in mm, safe margins, neck/hem offsets, seams, pocket/zip exclusions, minimum order, artwork format, resolution and bleed.

## Acceptance criteria before taking orders
1. Obtain commercial image permissions and locally host licensed front/back/side mockups, with a calibrated overlay for each SKU.
2. Replace provisional print profiles with written fulfilment-partner-approved limits and method compatibility.
3. Keep separate editable layer stacks per position, including uploaded artwork and text, and persist artwork securely with user consent.
4. Generate lossless transparent print files at physical size with 300 DPI target or approved vector output. Current PNG export is **concept-only** and is not a print-ready file.
5. Implement image orientation handling, SVG/PDF sanitisation if added, file validation, anti-malware processing, font licensing, colour management and proof approval.
6. Confirm production pricing, tax, bulk pricing, shipping, rush fulfilment and method-specific minimums; show customer-facing quote before checkout.
7. Build secure backend, design storage, production job tracking and partner fulfilment API with idempotency, retries and audit logging.
8. Add accessibility, mobile/touch, cross-browser and print proof tests. Run npm test and npm run build in CI and test with real partner proofs.
9. Enable Stripe only after merchant configuration, legal policies, webhook verification and end-to-end fulfilment tests.
10. Do not accept live orders until all criteria pass.

## Source / rights notes
AS Colour official imagery is available for download, but availability does not itself establish a right to republish. Follow its brand guidelines and applicable licence.

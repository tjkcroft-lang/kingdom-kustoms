# Kingdom Kustoms

Private prototype of a premium custom apparel store and browser-based garment artwork editor.

## Run

`npm install && npm run dev`

`npm test && npm run build`

## Scope

- Responsive storefront, style/colour/size and print method choices (DTF, DTG, screen, combination)
- Browser image upload, drag to position, resize, rotation, invert colour, approximate light-background removal, save locally
- Consent-first newsletter preview (no data transmitted)
- Checkout disabled until Stripe, partner fulfilment, pricing and policies are configured
- Garment previews are illustrative placeholders, NOT licensed AS Colour photos or accurate print proofs

## Production blockers

No backend customer database, Stripe checkout, verified partner integration, licensed supplier assets, print-ready output, or true AI background removal. Do not take orders or collect personal data on this prototype. Artwork remains in the browser. A privacy policy and secure consent handling are required before any real signup. Do not commit secrets.

## Ten QA passes

1. Install and build (pending CI)
2. Catalogue options (automated)
3. Printing-method options (automated)
4. Price logic and quotes (pending partner pricing)
5. Upload file validation (manual pending)
6. Position/scale/rotate/invert/background (manual pending)
7. Mobile/touch interactions (manual pending)
8. Accessibility/keyboard and contrast (manual pending)
9. Security/privacy/consent (integration pending)
10. Stripe/webhooks/fulfilment end-to-end (integration pending)

The ten passes are a tracked plan, NOT ten completed reviews.

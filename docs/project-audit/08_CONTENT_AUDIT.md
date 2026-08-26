# Content Audit

The platform architecture is complete, but the content layer relies heavily on placeholder assets. A full content swap is required before launch.

## Missing Photography
*Status: 100% Placeholder (Using Unsplash).*
- **Hero Video/Image:** Needs a high-quality brand video or establishing shot.
- **Product Photography:** The 8 sample products currently use generic Unsplash jewelry photos. Need isolated studio shots (ideally 3:4 aspect ratio) and contextual editorial shots for the thumbnails.
- **Founder Portrait:** Currently an Unsplash placeholder. Needs a professional portrait of Biruh Getnet Aklog.
- **Process/Craftsmanship Shots:** The `/about` page and Homepage use generic wire/studio shots. Need actual photos of the Biruh Adorn studio and hands working.
- **Social Grid:** The Instagram preview section uses 4 Unsplash placeholders.

## Missing Product Content
*Status: Sample Data.*
- The `src/data/products.ts` file contains 8 fictionalized products (e.g., "Sculpted Aurora Ring").
- Need the actual inventory list containing:
  - Real Product Names
  - Correct Reference Codes (e.g., BA-R-024)
  - Accurate Pricing in ETB
  - Accurate Material lists
  - Real descriptions.

## Missing Collection Content
*Status: Sample Data.*
- The `/jewelry` gallery filters by "Aurora", "Stratum", and "Essence". If these are not the actual collections, the `collection` property in the product data needs to be updated.

## Missing Testimonials
*Status: Sample Data.*
- `src/data/testimonials.ts` contains 3 placeholder quotes. These need to be replaced with real client feedback, or the section should be hidden/removed if none exist yet.

## Missing Contact Information
*Status: Partial.*
- `src/config/brand.ts` and `contact.ts` have some dummy data.
- Needs the official WhatsApp number (must include country code, e.g., +251...).
- Needs the official Instagram handle link.
- Needs the accurate physical location/studio address if applicable.

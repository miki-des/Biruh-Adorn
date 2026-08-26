# Technical Architecture

## Folder Structure
The project follows a standard Next.js 14+ App Router structure with feature-based colocation in the `src/` directory.

- `src/app/`: The routing layer. Contains `page.tsx` and `layout.tsx` files.
- `src/components/`: The UI layer, grouped by feature context (`about`, `custom`, `product`, `sections`, etc.).
- `src/config/`: Static configuration files for brand data, navigation, and social links.
- `src/data/`: The pseudo-CMS layer. Contains TypeScript arrays exporting product and collection data.
- `src/lib/`: Utility functions (e.g., `whatsapp.ts` for link generation).

## App Router Structure
The application uses the modern Next.js App Router.
- All pages are Server Components by default.
- The site is entirely static, meaning `next build` pre-renders HTML for `/`, `/about`, `/contact`, `/custom`, and `/jewelry`.
- This ensures maximum performance and zero Server-Side Rendering (SSR) latency at runtime.

## Server / Client Boundaries
The architecture strictly enforces "Client Boundaries" only where interactivity is required.
- **Server Components (Default):** All layouts, typography, grids, and static sections.
- **Client Components (`"use client"`):** 
  - `GalleryClient.tsx` (Needs React state for filtering and search).
  - `ProductModal.tsx` (Needs React state for image swapping and `useEffect` for keyboard escape listening).
  - `ConsultationForm.tsx` (Needs controlled inputs to generate the WhatsApp string).
  - `FloatingWhatsApp.tsx` (Needs scroll-event listeners to hide/show).
  - `ScrollHeaderWrapper.tsx` (Needs scroll-event listeners to change header background opacity).

## SEO Implementation & Metadata Strategy
- Built-in Next.js `<Metadata>` objects are exported from every `page.tsx`.
- Titles dynamically pull from `brandConfig.name`.
- Descriptions are tailored per route.
- OpenGraph image configuration is not currently implemented (uses default).

## Image Strategy
- The custom `ImageSlot` component wraps `next/image`.
- It enforces strict aspect ratios using standard CSS techniques (e.g. `aspect-ratio: 3/4`), preventing Cumulative Layout Shift (CLS).
- `next.config.ts` is configured to allow `images.unsplash.com` for remote patterns during development. This must be updated to the actual image CDN/bucket before launch.

## Performance Strategy
- **CSS Modules:** Prevents large runtime CSS-in-JS payloads. Styles are statically extracted.
- **Font Optimization:** `next/font/google` is used to load Bodoni Moda and Inter, meaning no external network requests to Google Fonts at runtime and zero layout shift.
- **Static Generation:** The lack of a database means the site is 100% statically generated. Time to First Byte (TTFB) is entirely dependent on the CDN.

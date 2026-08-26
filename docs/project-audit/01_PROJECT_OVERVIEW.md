# Project Overview: Biruh Adorn

## Project Purpose
Biruh Adorn is a contemporary jewelry art house founded by Biruh Getnet Aklog. The digital experience is designed to serve as a high-end, immersive digital showroom that translates the tactile, sculptural nature of the physical jewelry into a premium online experience.

## Brand Positioning
The brand positions itself at the intersection of fashion, art, and structural adornment. The tone is editorial, sophisticated, and artistic. Jewelry is presented not just as accessories, but as "material, movement, and form" designed for individual expression.

## Core Business Goals
1. Establish a premium digital presence for the Biruh Adorn brand.
2. Showcase the craftsmanship and artistic narrative behind the pieces.
3. Drive user inquiries and custom bespoke consultations via direct WhatsApp integration.

## Conversion Strategy
Unlike traditional e-commerce (add to cart, checkout), the conversion model is high-touch and relationship-based.
- **Primary Conversion:** Direct WhatsApp inquiries for specific catalog pieces.
- **Secondary Conversion:** Custom jewelry consultation requests via WhatsApp.
- **Tertiary Conversion:** General contact inquiries (email/WhatsApp).

## Current Implementation Status
The project is a Next.js 16 App Router application utilizing React Server Components for performance and SEO. The site is primarily static with dynamic routing reserved for individual product detail pages (`/jewelry/[slug]`). The foundational design system, layout, and core pages have been implemented. 

## Major Architectural Decisions
- **Framework:** Next.js (App Router) for Server-Side Rendering (SSR) and Static Site Generation (SSG).
- **Styling:** CSS Modules (`.module.css`) with CSS Variables for a robust, class-based design system that avoids heavy runtime CSS-in-JS overhead.
- **State/Data:** Hardcoded TypeScript data files (`src/data/`) act as the CMS. This provides maximum type safety and performance for the initial launch, with the ability to swap to a headless CMS later.
- **Conversion Engine:** Seamless deep-linking to WhatsApp with pre-filled message templates depending on the context (product inquiry vs. custom consultation).

## Current Phase Reached
- Core routes (`/`, `/about`, `/contact`, `/custom`, `/jewelry`) are fully built and statically optimized.
- Gallery filtering and product modal flows are implemented.
- The `collections` route has been deprecated in favor of a unified gallery experience with collection filters.
- All TypeScript errors have been resolved and the site builds successfully.

## Outstanding Work
- Real photography (currently using Unsplash placeholders).
- Real product data, descriptions, and pricing (currently using fixtures).
- Client testimonials (currently using placeholder quotes).
- Final review of mobile responsive behavior on physical devices.

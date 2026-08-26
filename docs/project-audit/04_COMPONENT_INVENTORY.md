# Component Inventory

*Note: The project leverages React Server Components by default. Files requiring interactivity are marked with `"use client"`.*

## `components/layout`
- **`Header.tsx`**: Main navigation bar. Includes scroll-detection for transparent-to-solid transitions.
- **`Footer.tsx`**: Site footer containing secondary links, social links, and copyright.
- **`FloatingWhatsApp.tsx`**: Global fixed CTA button in the bottom right corner (Client Component).
- **`ScrollHeaderWrapper.tsx`**: Client wrapper to handle scroll events for the Header.

## `components/ui`
- **`Typography.tsx`**: Core design system text component. Maps variants (`display-xl`, `h1`, `body`, etc.) to semantic HTML tags and CSS module classes.
- **`Button.tsx`**: Base interactive button components (`Button`, `LinkButton`) supporting primary/secondary/minimal variants.
- **`Grid.tsx`**: Layout wrappers (`Container`, `Grid`, `Section`) that enforce maximum widths and responsive columns.
- **`ImageSlot.tsx`**: Next.js `<Image>` wrapper enforcing strict aspect ratios (`1:1`, `4:3`, `3:4`, `16:9`) and handling placeholder states.

## `components/sections` (Homepage Blocks)
- **`Hero.tsx`**: Above-the-fold introductory video/image.
- **`BrandIntroduction.tsx`**: Short text block outlining the brand mission.
- **`FeaturedJewelry.tsx`**: Curated selection of top pieces.
- **`Craftsmanship.tsx`**: Editorial block highlighting the handmade process.
- **`EmpoweringJewelry.tsx`**: Text/image block regarding brand philosophy.
- **`CollectionsPreview.tsx`**: Cards linking to specific collections (now linking directly to the filtered gallery).
- **`CustomJewelry.tsx`**: Teaser for the bespoke process.
- **`Founder.tsx`**: Short bio and image of Biruh Getnet Aklog.
- **`ServicesPreview.tsx`**: Overview of offerings.
- **`SocialPreview.tsx`**: Instagram/Social grid preview.
- **`FinalCTA.tsx`**: Large text block at the bottom driving to the gallery or WhatsApp.

## `components/product`
- **`ProductGrid.tsx`**: Maps an array of products to `ProductCard` components in a CSS grid.
- **`ProductCard.tsx`**: Individual item display (Image, Name, Ref, Price).
- **`ProductInquiry.tsx`**: Minimal CTA generating a WhatsApp product inquiry link.
- **`ProductModal.tsx`**: (Client Component) Overlays the screen with a large image gallery, full product details, and a primary WhatsApp order button.

## `components/filters`
- **`GalleryClient.tsx`**: (Client Component) The engine of the `/jewelry` page. Handles state for search text, active category, active collection, and the selected product for the modal.

## `components/custom`
- **`CustomHero.tsx`**: Header for the Custom page.
- **`CustomProcess.tsx`**: Step-by-step layout of how bespoke jewelry is made.
- **`InspirationGuide.tsx`**: Text instructions on what to prepare for a consultation.
- **`ConsultationForm.tsx`**: (Client Component) Controlled form capturing name, phone, jewelry type, and idea, outputting a highly formatted WhatsApp message.
- **`CustomCTA.tsx`**: Bottom CTA for the custom page.

## `components/about`
- **`AboutHero.tsx`**: Introductory section.
- **`FounderStory.tsx`**: Detailed biography.
- **`FashionToJewelry.tsx`**: Typographic sequence showing the conceptual evolution of the brand.
- **`MaterialStory.tsx` / `MaterialMovementForm.tsx` / `EmpoweringJewelry.tsx` / `CraftsmanshipStory.tsx`**: Editorial content blocks mixing text and imagery.
- **`AboutCTA.tsx`**: Final call to action.

## `components/social`
- **`TestimonialsPreview.tsx`**: Fetches and displays featured client quotes.
- **`InstagramPreview.tsx`**: Grid of recent social imagery.

## `components/collections` *(Orphaned / Deprecated)*
*These components remain in the codebase but are currently unused due to the architectural shift away from dedicated collection pages toward a unified gallery.*
- `CollectionCard.tsx`, `CollectionCTA.tsx`, `CollectionDetailHero.tsx`, `CollectionGallery.tsx`, `CollectionMaterial.tsx`, `CollectionsEmptyState.tsx`, `CollectionsGrid.tsx`, `CollectionsHero.tsx`, `CollectionStory.tsx`, `FeaturedPieces.tsx`, `RelatedCollections.tsx`.

# Page Visual Breakdown

*Note for Designer: The site utilizes a dark, premium aesthetic (`--color-bg-primary: #040914`, deep navy/black) accented by Ivory text (`#FAF9F6`) and Champagne Gold details (`#D4AF37`). Typography relies on Bodoni Moda for elegant, editorial headings and Inter for clean, readable body copy.*

## Homepage (`/`)
- **Layout structure:** Long-scroll editorial format composed of distinct, full-width sections.
- **Typography hierarchy:** Massive display headers (`display-xl`) for the Hero, moving down to `h2`/`h3` for section titles, with delicate `reference` (all-caps tracking) used for eyebrows and metadata.
- **Visual rhythm:** Alternates between dense visual moments (full-bleed images, dense grids) and sparse, typography-driven breathing room.
- **Grid usage:** Standard 12-column grid (`Container`) bounds the content to a `1440px` max-width.
- **Photography placement:** 
  - Hero: Full-screen background video/image.
  - Featured: Asymmetrical image slots.
  - Previews: Strict 1:1 or 4:3 aspect ratios in tight grids.
- **Animation usage:** Smooth fade-ins, scale-on-hover for images, and subtle text color transitions.
- **CTA placement:** Staggered throughout. Final CTA sits at the very bottom in a massive, sparse block.

## Gallery (`/jewelry`)
- **Layout structure:** Standard e-commerce catalog structure. Top header, sticky-feeling filter bar, followed by a dense masonry-style product grid.
- **Typography hierarchy:** Restrained. Clean `h1` at the top. The grid relies heavily on imagery. Product names use `h4` with subtle gold reference numbers.
- **Visual rhythm:** Highly structured and repetitive to allow the jewelry to stand out.
- **Grid usage:** 4-column CSS grid on desktop, scaling down to 2-column on mobile.
- **Photography placement:** Uniform 3:4 aspect ratio for all product cards.
- **Animation usage:** Images scale up slightly (`1.05`) within their bounds on hover. A dark "View Details" overlay fades in.
- **CTA placement:** Clicking a card triggers the Product Modal.

## Product Modal (Gallery Overlay)
- **Layout structure:** 2-column split (Desktop) taking up max 960px width. Left side is imagery, right side is scrolling details.
- **Typography hierarchy:** Prominent reference number, large `Bodoni` product name, followed by price and description.
- **Visual rhythm:** Tight and information-dense.
- **Photography placement:** Large 1:1 main image with 60x60px clickable thumbnails below.
- **Animation usage:** Modal slides up from the bottom (`slideUp`) while the background overlay fades in.
- **CTA placement:** Fixed, bright green WhatsApp button spanning the full width of the details column at the bottom.

## About (`/about`)
- **Layout structure:** Highly asymmetrical, narrative-driven layout. Text blocks and images often overlap or sit in offset columns.
- **Typography hierarchy:** Heavily leverages Bodoni Moda. Frequent use of large pull quotes and conceptual statements.
- **Visual rhythm:** Slow and deliberate. Lots of negative space (`--spacing-editorial`).
- **Grid usage:** Breaks the standard 12-column grid often by pushing images off-axis.
- **Photography placement:** Editorial, lifestyle, and process shots placed strategically to break up text.
- **Animation usage:** (Relies on global CSS transitions, no heavy scroll-jacking).
- **CTA placement:** Minimal until the very bottom `AboutCTA` section.

## Custom (`/custom`)
- **Layout structure:** Educational top-half flowing into an interactive two-column bottom half.
- **Typography hierarchy:** Clear step-by-step numbering (`h3`) alongside explanatory paragraphs.
- **Visual rhythm:** Methodical. Guides the eye down a central axis before splitting into the form.
- **Grid usage:** 2-column split for the Consultation Form (Guidelines on left, Form on right).
- **Photography placement:** Minimal. Focus is on text and user input.
- **Animation usage:** Form fields have smooth bottom-border color transitions on focus.
- **CTA placement:** Form submission button generates a WhatsApp deep-link.

## Contact (`/contact`)
- **Layout structure:** Perfectly centered, highly restrained single column. Pad-heavy at the top (`160px`) to clear the header.
- **Typography hierarchy:** Classic centered cascade. Eyebrow -> Title -> Divider -> Body.
- **Visual rhythm:** Static, calm, and definitive.
- **Grid usage:** 3-column flex grid for the contact methods (WhatsApp, Email, Locations) that stacks on mobile.
- **Photography placement:** None. Purely typographic.
- **Animation usage:** None, besides standard button hovers.
- **CTA placement:** Prominent primary button at the bottom center.

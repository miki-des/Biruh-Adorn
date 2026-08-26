# Design System Audit

The design system is managed entirely via CSS variables in `src/app/globals.css`. It relies heavily on absolute contrast and delicate typography to evoke luxury.

## Colors
- **Backgrounds:**
  - `--color-bg-primary: #040914` (Deep Navy Environment)
  - `--color-bg-secondary: #081224`
  - `--color-bg-elevated: #0C1A33`
- **Text:**
  - `--color-text-primary: #FAF9F6` (Ivory Voice)
  - `--color-text-secondary: #EBEAE5`
  - `--color-text-muted: #B3B9C5`
- **Accents:**
  - `--color-accent: #D4AF37` (Champagne Gold Detail)
  - `--color-accent-hover: #E6C865`
- **Borders:**
  - `--color-border: rgba(250, 249, 246, 0.1)`

## Typography
- **Display Font:** Bodoni Moda (`--font-display`). Used exclusively for `h1` through `h6`. Evokes classic editorial fashion.
- **Sans Font:** Inter (`--font-sans`). Used for body text, metadata, buttons, and references. Clean and utilitarian.
- **Scale:**
  - `--text-display-xl`: clamp(3rem, 8vw, 6rem)
  - `--text-display-lg`: clamp(2.5rem, 6vw, 4.5rem)
  - `--text-h1` to `--text-h4`
  - `--text-body-lg`, `--text-body`, `--text-body-sm`
  - `--text-reference`: 0.875rem (often uppercase with tracking)

## Spacing & Layout
- **Grid:** `--grid-max-width: 1440px`. The `Container` component wraps this.
- **Vertical Rhythm:** 
  - `--spacing-section: clamp(4rem, 10vw, 8rem)` (For massive gaps between distinct ideas).
  - `--spacing-editorial: clamp(2rem, 6vw, 6rem)` (For asymmetrical text/image relationships).

## Motion
- Standardized bezier curves to ensure animations feel deliberate, not snappy.
  - `--motion-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
  - `--motion-medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
  - `--motion-slow: 0.6s cubic-bezier(0.4, 0, 0.2, 1)`

## Component Patterns
- **ImageSlots:** Images are never allowed to dictate their own height. They are bound by CSS aspect ratios (`1:1`, `4:3`, `3:4`) to ensure grids remain perfect regardless of the source image.
- **Buttons:** Rely on simple border transitions or background fill inversions rather than heavy drop shadows or 3D effects.
- **Eyebrows:** The `Typography variant="reference"` is used extensively above main headers to provide context (e.g., "GET IN TOUCH" above "Contact Us").

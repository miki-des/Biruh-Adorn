# Biruh Adorn Design System

*This document reflects the implemented token system derived from the authoritative project context.*

## Core Aesthetic
- **Vibe**: Contemporary Jewelry Art House, Minimal, Elegant, Premium, Handcrafted.
- **Principle**: Deep Navy is the environment. Ivory is the voice. Champagne Gold is the detail. Jewelry is the hero.

## Semantic Colors (`globals.css`)
### Background (Environment)
- `--color-bg-primary` (`#040914`): Deep Navy main background.
- `--color-bg-secondary`: Elevated containers.
- `--color-bg-elevated`: Highest surface depth.
- `--color-bg-overlay`: Modals/menus.

### Text (Voice)
- `--color-text-primary` (`#FAF9F6`): Primary Ivory text.
- `--color-text-secondary`: Supporting ivory.
- `--color-text-muted`: De-emphasized text.
- `--color-text-inverse`: Dark text for use on light elements.

### Accent (Detail)
- `--color-accent` (`#D4AF37`): Muted Champagne Gold. Used sparingly for borders, references, and active states.
- `--color-accent-muted`: Subtle hover details.

### Borders
- `--color-border`: Very subtle ivory line.
- `--color-border-accent`: Gold line for specific stylistic delineations.

## Typography
- **Display**: Bodoni Moda (`--font-display`). Used for hero text, large headings. Conveys fashion and artistry.
- **Sans-serif**: Inter (`--font-sans`). Used for body, metadata, references, navigation. Conveys modernity and precision.

### Scale
- `--text-display-xl` / `--text-display-lg`: Major editorial statements.
- `--text-h1` through `--text-h4`: Section headings.
- `--text-body` (lg/sm): Standard reading text.
- `--text-reference`: Specialized technical style for product refs (e.g. `REF. BA-R-024`).
- `--text-caption`: Small utility text.

## Spacing & Grid
- Variables range from `--spacing-micro` to `--spacing-page` and `--spacing-editorial`.
- Base Grid: 12-column desktop, flexible tablet, 1-column mobile. Handled via `<Grid>` primitive.

## Motion
- `--motion-fast` (0.15s), `--motion-medium` (0.3s), `--motion-slow` (0.6s).
- `--motion-reveal` (1.2s): Used for elegant page loads and image reveals, respecting `prefers-reduced-motion`.

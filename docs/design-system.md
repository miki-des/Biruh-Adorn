# Biruh Adorn Design System

*This document reflects the implemented token system derived from the authoritative project context.*

## Core Aesthetic
- **Vibe**: Contemporary Jewelry Art House, Minimal, Elegant, Premium, Handcrafted.
- **Principle**: Deep Navy is the environment. Ivory is the voice. Champagne Gold is the detail. Jewelry is the hero.

## Semantic Colors (`globals.css`)
### Background (Environment)
- `--color-bg-primary` (`#FFFFFF`): Crisp White main background.
- `--color-bg-secondary`: Warm Ivory (`#FAF9F6`) elevated containers.
- `--color-bg-elevated`: Highest surface depth (`#FFFFFF`).
- `--color-bg-overlay`: Modals/menus (`rgba(255, 255, 255, 0.85)`).

### Text (Voice)
- `--color-text-primary` (`#040914`): Primary Deep Navy text.
- `--color-text-secondary`: Slate/Charcoal supporting text (`#2C364C`).
- `--color-text-muted`: De-emphasized text (`#718096`).
- `--color-text-inverse`: Light text for use on dark elements (`#FAF9F6`).

### Accent (Detail)
- `--color-accent` (`#D4AF37`): Champagne Gold. Used sparingly for borders, references, and active states.
- `--color-accent-muted`: Subtle hover details.
- `--color-accent-hover` (`#B8860B`): Darker gold for hover states.

### Borders
- `--color-border`: Very subtle navy line.
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

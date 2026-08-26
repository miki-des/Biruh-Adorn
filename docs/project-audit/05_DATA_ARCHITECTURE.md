# Data Architecture

*Note: The project currently relies on hardcoded TypeScript data arrays acting as a pseudo-CMS to ensure type safety and rapid prototyping. It does not currently connect to a database.*

## `src/data/products.ts`
- **Purpose:** Central repository for all jewelry pieces.
- **Interfaces:**
  ```typescript
  export interface Product {
    id: string;
    reference: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    currency: string;
    category: string;
    collection?: string;
    materials: string[];
    colors?: string[];
    availability: "In Stock" | "Made to Order" | "Out of Stock" | "Reserved";
    images: string[];
    featured: boolean;
  }
  ```
- **Current Data Population:** Contains 8 fully-fleshed out sample products with Unsplash placeholder images.
- **Relationships:** Belongs to `category` (Rings, Necklaces, etc.) and optionally `collection` (Aurora, Stratum).
- **Debug Fixtures:** Exists but is bypassed; the primary functions (`getProducts`, etc.) return the live production array.

## `src/data/collections.ts`
- **Purpose:** Defines the conceptual collections.
- **Interfaces:**
  ```typescript
  export interface Collection {
    id: string;
    name: string;
    slug: string;
    description: string;
    concept: string;
    mood?: string;
    coverImage: string;
    editorialImages: string[];
    featured: boolean;
  }
  ```
- **Current Data Population:** Contains 3 sample collections (Aurora, Stratum, Essence).
- **Relationships:** Referenced by products. 
- **Note:** Currently only used to extract collection names for filtering, as the dedicated `/collections` routes were deprecated.

## `src/data/testimonials.ts`
- **Purpose:** Client reviews and quotes.
- **Interfaces:**
  ```typescript
  export interface Testimonial {
    id: string;
    quote: string;
    authorName: string;
    authorContext?: string;
    featured: boolean;
  }
  ```
- **Current Data Population:** Contains 3 placeholder quotes.

## Configuration Files (`src/config/`)
- **`brand.ts`**: Core brand variables (`name`, `tagline`, `description`, `locations`).
- **`contact.ts`**: Unified contact information (`email`, `phone`, `whatsapp`, `instagram`).
- **`navigation.ts`**: Array mapping `label` to `href` for the main header and footer routing.
- **`social.ts`**: Structured links and handles for external platforms (Instagram, LinkedIn, Pinterest, TikTok).

export interface Collection {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;
  coverImage: string;
  coverRatio: "portrait" | "landscape" | "square";
  mood?: "Sculptural" | "Fluid" | "Architectural" | "Minimal" | "Organic";
  featured: boolean;
  galleryImages: string[];
}

const IMG = "/Assets/bruih_pictures";

// Production Catalogue — categories as "collections"
export const collections: Collection[] = [
  {
    id: "col-necklaces",
    slug: "necklaces",
    name: "Necklaces",
    subtitle: "Stones, Chains & Crosses",
    description: "Wire-wrapped pendants and chain necklaces featuring natural stones, beads, and cross motifs. Each piece is handcrafted to create a striking yet elegant statement.",
    heroImage: `${IMG}/1. Necklaces/stone-necklace_1.1/IMG_2168.webp`,
    coverImage: `${IMG}/1. Necklaces/stone-necklace_1.1/IMG_0975.webp`,
    coverRatio: "portrait",
    mood: "Fluid",
    featured: true,
    galleryImages: [
      `${IMG}/1. Necklaces/stone-necklace_1.1/IMG_2176.webp`,
      `${IMG}/1. Necklaces/chain-necklace_1.2/IMG_3601.webp`,
      `${IMG}/1. Necklaces/Cross-necklace_1.3/IMG_0798.webp`,
    ],
  },
  {
    id: "col-rings",
    slug: "rings",
    name: "Rings",
    subtitle: "Sculptural Wire Forms",
    description: "Bold and delicate ring designs ranging from minimalist wire bands to sculptural statement pieces. Available for both men and women.",
    heroImage: `${IMG}/5. Rings/6.1 Ring set with braclet/IMG_1716.webp`,
    coverImage: `${IMG}/5. Rings/5.3 Women ring/IMG_1926.webp`,
    coverRatio: "portrait",
    mood: "Sculptural",
    featured: true,
    galleryImages: [
      `${IMG}/5. Rings/5.1 Men rings/11278292-6D67-4F95-9B13-0F7CAAD07B3E.webp`,
      `${IMG}/5. Rings/5.4 Women ring/IMG_0476.webp`,
      `${IMG}/5. Rings/6.1 Ring set with braclet/IMG_1666.webp`,
    ],
  },
  {
    id: "col-earrings",
    slug: "earrings",
    name: "Earrings & Ear Cuffs",
    subtitle: "Drops, Hoops & Cuffs",
    description: "Delicate to bold earrings and modern ear cuffs crafted from twisted wire. From everyday studs to dramatic statement hoops.",
    heroImage: `${IMG}/3. Earrings/3.1 Earrings/IMG_0775.webp`,
    coverImage: `${IMG}/3. Earrings/3.1 Earrings/IMG_0776.webp`,
    coverRatio: "square",
    mood: "Minimal",
    featured: false,
    galleryImages: [
      `${IMG}/3. Earrings/3.2 Earrings/IMG_1225.webp`,
      `${IMG}/3. Earrings/3.4 Earrings/IMG_2606.webp`,
      `${IMG}/8 .Ear cuff/8 Ear cuff/IMG_3093.webp`,
    ],
  },
];

// Isolated Development Fixtures
const devFixtures: Collection[] = [];

export async function getCollections(debug: boolean = false): Promise<Collection[]> {
  if (debug) {
    return [...collections, ...devFixtures];
  }
  return collections;
}

export async function getCollectionBySlug(slug: string, debug: boolean = false): Promise<Collection | undefined> {
  const allCollections = await getCollections(debug);
  return allCollections.find((c) => c.slug === slug);
}

export async function getRelatedCollections(currentId: string, mood?: string, debug: boolean = false): Promise<Collection[]> {
  const allCollections = await getCollections(debug);
  
  // Exclude current
  const others = allCollections.filter(c => c.id !== currentId);
  
  // Sort by mood match first if mood is provided
  if (mood) {
    others.sort((a, b) => {
      if (a.mood === mood && b.mood !== mood) return -1;
      if (a.mood !== mood && b.mood === mood) return 1;
      return 0;
    });
  }
  
  // Return top 2
  return others.slice(0, 2);
}

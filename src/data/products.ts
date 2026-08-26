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

// ─── Image base path ────────────────────────────────────────────
const IMG = "/Assets/bruih_pictures";

// ─── Production Catalogue ───────────────────────────────────────
export const products: Product[] = [
  // ═══════════════════════════════════════════════════════════════
  // 1. NECKLACES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "001",
    reference: "BA001",
    name: "Stone Necklace",
    slug: "stone-necklace",
    description: "A striking necklace adorned with natural stones, handcrafted to create a bold and elegant statement piece that complements any outfit.",
    price: 2300,
    currency: "ETB",
    category: "Necklaces",
    materials: ["Wire", "Natural Stone"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/1. Necklaces/stone-necklace_1.1/IMG_0975.webp`,
      `${IMG}/1. Necklaces/stone-necklace_1.1/IMG_2168.webp`,
      `${IMG}/1. Necklaces/stone-necklace_1.1/IMG_2176.webp`,
      `${IMG}/1. Necklaces/stone-necklace_1.1/IMG_2177.webp`,
      `${IMG}/1. Necklaces/stone-necklace_1.1/IMG_2181.webp`,
      `${IMG}/1. Necklaces/stone-necklace_1.1/IMG_2191.webp`,
    ],
    featured: true,
  },
  {
    id: "002",
    reference: "BA002",
    name: "Chain Necklace",
    slug: "chain-necklace",
    description: "A refined chain necklace with intricate wire detailing. Designed to sit beautifully on the collarbone, making a luxurious everyday statement.",
    price: 4500,
    currency: "ETB",
    category: "Necklaces",
    materials: ["Chain", "Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/1. Necklaces/chain-necklace_1.2/IMG_3601.webp`,
      `${IMG}/1. Necklaces/chain-necklace_1.2/IMG_3602.webp`,
      `${IMG}/1. Necklaces/chain-necklace_1.2/IMG_3603.webp`,
    ],
    featured: true,
  },
  {
    id: "003",
    reference: "BA003",
    name: "Cross Necklace",
    slug: "cross-necklace",
    description: "A delicate cross pendant necklace, handcrafted with fine wire work. A timeless and meaningful piece for everyday wear.",
    price: 600,
    currency: "ETB",
    category: "Necklaces",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/1. Necklaces/Cross-necklace_1.3/IMG_0798.webp`,
    ],
    featured: false,
  },

  // ═══════════════════════════════════════════════════════════════
  // 2. BRACELETS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "004",
    reference: "BA004",
    name: "Three Beaded Bracelets",
    slug: "three-beaded-bracelets",
    description: "A set of three beaded bracelets, each uniquely handcrafted. Wear them stacked together for a layered look or individually for subtle elegance.",
    price: 2500,
    currency: "ETB",
    category: "Bracelets",
    materials: ["Beads", "Wire"],
    colors: ["Gold", "Multi"],
    availability: "In Stock",
    images: [
      `${IMG}/2. Bracelets/2.1 Three beaded bracelets/IMG_0237.webp`,
      `${IMG}/2. Bracelets/2.1 Three beaded bracelets/IMG_0238.webp`,
      `${IMG}/2. Bracelets/2.1 Three beaded bracelets/IMG_0242.webp`,
      `${IMG}/2. Bracelets/2.1 Three beaded bracelets/IMG_0244.webp`,
      `${IMG}/2. Bracelets/2.1 Three beaded bracelets/IMG_0466.webp`,
      `${IMG}/2. Bracelets/2.1 Three beaded bracelets/IMG_0467.webp`,
    ],
    featured: true,
  },
  {
    id: "005",
    reference: "BA005",
    name: "Beaded Bracelet",
    slug: "beaded-bracelet",
    description: "A single beaded bracelet with delicate wire detailing. Light and comfortable, designed for effortless daily wear.",
    price: 1500,
    currency: "ETB",
    category: "Bracelets",
    materials: ["Beads", "Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/2. Bracelets/2.2 One beaded Bracelet/IMG_5051.webp`,
      `${IMG}/2. Bracelets/2.2 One beaded Bracelet/IMG_5052.webp`,
      `${IMG}/2. Bracelets/2.2 One beaded Bracelet/IMG_5053.webp`,
      `${IMG}/2. Bracelets/2.2 One beaded Bracelet/IMG_5054.webp`,
      `${IMG}/2. Bracelets/2.2 One beaded Bracelet/IMG_5055.webp`,
      `${IMG}/2. Bracelets/2.2 One beaded Bracelet/IMG_5056.webp`,
    ],
    featured: false,
  },
  {
    id: "006",
    reference: "BA006",
    name: "Mixed Bracelets",
    slug: "mixed-bracelets",
    description: "A versatile mixed bracelet collection combining beads, chains, and wire elements. Perfect for creating your own signature stack.",
    price: 1500,
    currency: "ETB",
    category: "Bracelets",
    materials: ["Beads", "Wire", "Chain"],
    colors: ["Gold", "Multi"],
    availability: "In Stock",
    images: [
      `${IMG}/2. Bracelets/2.3 Mixed Bracelets/IMG_2987.webp`,
      `${IMG}/2. Bracelets/2.3 Mixed Bracelets/IMG_3354.webp`,
      `${IMG}/2. Bracelets/2.3 Mixed Bracelets/IMG_3362.webp`,
      `${IMG}/2. Bracelets/2.3 Mixed Bracelets/IMG_3506.webp`,
      `${IMG}/2. Bracelets/2.3 Mixed Bracelets/IMG_3613.webp`,
      `${IMG}/2. Bracelets/2.3 Mixed Bracelets/IMG_3616.webp`,
    ],
    featured: false,
  },

  // ═══════════════════════════════════════════════════════════════
  // 3. EARRINGS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "007",
    reference: "BA007",
    name: "Gold Drop Earrings",
    slug: "gold-drop-earrings",
    description: "Elegant drop earrings with a refined gold finish. Their graceful movement and sculptural form make them perfect for both day and evening wear.",
    price: 1200,
    currency: "ETB",
    category: "Earrings",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/3. Earrings/3.1 Earrings/IMG_0775.webp`,
      `${IMG}/3. Earrings/3.1 Earrings/IMG_0776.webp`,
      `${IMG}/3. Earrings/3.1 Earrings/IMG_0777.webp`,
      `${IMG}/3. Earrings/3.1 Earrings/IMG_0778.webp`,
      `${IMG}/3. Earrings/3.1 Earrings/IMG_2533.webp`,
      `${IMG}/3. Earrings/3.1 Earrings/IMG_2534.webp`,
    ],
    featured: true,
  },
  {
    id: "008",
    reference: "BA008",
    name: "Twisted Wire Earrings",
    slug: "twisted-wire-earrings",
    description: "Handcrafted earrings featuring twisted wire work that catches the light beautifully. A modern take on classic elegance.",
    price: 1200,
    currency: "ETB",
    category: "Earrings",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/3. Earrings/3.2 Earrings/IMG_1218.webp`,
      `${IMG}/3. Earrings/3.2 Earrings/IMG_1224.webp`,
      `${IMG}/3. Earrings/3.2 Earrings/IMG_1225.webp`,
      `${IMG}/3. Earrings/3.2 Earrings/IMG_2540.webp`,
    ],
    featured: false,
  },
  {
    id: "009",
    reference: "BA009",
    name: "Minimalist Stud Earrings",
    slug: "minimalist-stud-earrings",
    description: "Simple yet refined stud earrings with a clean geometric form. Perfect for everyday elegance and easy to pair with any outfit.",
    price: 1300,
    currency: "ETB",
    category: "Earrings",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/3. Earrings/3.3 Earrings/IMG_1400.webp`,
    ],
    featured: false,
  },
  {
    id: "010",
    reference: "BA010",
    name: "Statement Hoop Earrings",
    slug: "statement-hoop-earrings",
    description: "Bold hoop earrings with intricate wire detailing. Designed to make a statement while maintaining an air of sophistication.",
    price: 1600,
    currency: "ETB",
    category: "Earrings",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/3. Earrings/3.4 Earrings/IMG_2606.webp`,
      `${IMG}/3. Earrings/3.4 Earrings/IMG_2608.webp`,
    ],
    featured: false,
  },
  {
    id: "011",
    reference: "BA011",
    name: "Dainty Wire Earrings",
    slug: "dainty-wire-earrings",
    description: "Delicate and lightweight earrings crafted from fine wire. Their understated beauty makes them an ideal everyday accessory.",
    price: 700,
    currency: "ETB",
    category: "Earrings",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/3. Earrings/3.5 Earrings/IMG_1177.webp`,
    ],
    featured: false,
  },

  // ═══════════════════════════════════════════════════════════════
  // 4. NECKLACE + EARRING SETS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "012",
    reference: "BA012",
    name: "Necklace & Earring Set I",
    slug: "necklace-earring-set-1",
    description: "A coordinated necklace and earring set designed to be worn together for a polished, complete look. Handcrafted with meticulous attention to detail.",
    price: 5900,
    currency: "ETB",
    category: "Sets",
    materials: ["Wire", "Beads"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/4. Necklace + earring Sets/4.1 Necklace + earring Sets/IMG_5024.webp`,
    ],
    featured: true,
  },
  {
    id: "013",
    reference: "BA013",
    name: "Necklace & Earring Set II",
    slug: "necklace-earring-set-2",
    description: "An elegant matching set featuring a statement necklace paired with complementary earrings. Perfect for special occasions.",
    price: 1800,
    currency: "ETB",
    category: "Sets",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/4. Necklace + earring Sets/4.2 Necklace + earring Sets/IMG_0263.webp`,
      `${IMG}/4. Necklace + earring Sets/4.2 Necklace + earring Sets/IMG_0264.webp`,
      `${IMG}/4. Necklace + earring Sets/4.2 Necklace + earring Sets/IMG_0266.webp`,
      `${IMG}/4. Necklace + earring Sets/4.2 Necklace + earring Sets/IMG_0267.webp`,
    ],
    featured: false,
  },
  {
    id: "014",
    reference: "BA014",
    name: "Necklace & Earring Set III",
    slug: "necklace-earring-set-3",
    description: "A beautifully matched necklace and earring combination with harmonious wire work. An ideal gift or personal indulgence.",
    price: 1700,
    currency: "ETB",
    category: "Sets",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/4. Necklace + earring Sets/4.3 Necklace + earring Sets/IMG_0460.webp`,
      `${IMG}/4. Necklace + earring Sets/4.3 Necklace + earring Sets/IMG_0461.webp`,
      `${IMG}/4. Necklace + earring Sets/4.3 Necklace + earring Sets/IMG_0462.webp`,
      `${IMG}/4. Necklace + earring Sets/4.3 Necklace + earring Sets/IMG_0463.webp`,
      `${IMG}/4. Necklace + earring Sets/4.3 Necklace + earring Sets/IMG_0464.webp`,
      `${IMG}/4. Necklace + earring Sets/4.3 Necklace + earring Sets/IMG_0465.webp`,
    ],
    featured: false,
  },

  // ═══════════════════════════════════════════════════════════════
  // 5. RINGS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "015",
    reference: "BA015",
    name: "Men's Rings",
    slug: "mens-rings",
    description: "Bold and masculine ring designs crafted for the modern man. Combining strength and style in handcrafted wire and metal work.",
    price: 700,
    currency: "ETB",
    category: "Rings",
    materials: ["Wire", "Metal"],
    colors: ["Gold", "Silver"],
    availability: "In Stock",
    images: [
      `${IMG}/5. Rings/5.1 Men rings/11278292-6D67-4F95-9B13-0F7CAAD07B3E.webp`,
      `${IMG}/5. Rings/5.1 Men rings/5E75C3BD-53C6-4338-92BB-A778A6EEFD6D.webp`,
      `${IMG}/5. Rings/5.1 Men rings/895E3859-CAFD-400A-A4DD-31A1A7653CED.webp`,
      `${IMG}/5. Rings/5.1 Men rings/9CA7D068-712C-4066-AF6F-5DD521A56501.webp`,
      `${IMG}/5. Rings/5.1 Men rings/E1B55557-4C49-4CD6-AF2E-EC029F024AC9.webp`,
      `${IMG}/5. Rings/5.1 Men rings/IMG_0754.webp`,
      `${IMG}/5. Rings/5.1 Men rings/IMG_2609.webp`,
    ],
    featured: false,
  },
  {
    id: "016",
    reference: "BA016",
    name: "Classic Wire Ring",
    slug: "classic-wire-ring",
    description: "A sleek and minimalist ring, delicately shaped from a single strand of wire. An understated piece with timeless appeal.",
    price: 550,
    currency: "ETB",
    category: "Rings",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/5. Rings/5.2 Women ring/IMG_2519.webp`,
    ],
    featured: false,
  },
  {
    id: "017",
    reference: "BA017",
    name: "Sculptural Wire Ring",
    slug: "sculptural-wire-ring",
    description: "An architecturally inspired ring featuring flowing wire forms that wrap around the finger. A true wearable piece of art.",
    price: 750,
    currency: "ETB",
    category: "Rings",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/5. Rings/5.3 Women ring/IMG_1072.webp`,
      `${IMG}/5. Rings/5.3 Women ring/IMG_1926.webp`,
      `${IMG}/5. Rings/5.3 Women ring/IMG_1927.webp`,
      `${IMG}/5. Rings/5.3 Women ring/IMG_1928.webp`,
      `${IMG}/5. Rings/5.3 Women ring/IMG_1929.webp`,
      `${IMG}/5. Rings/5.3 Women ring/IMG_2541.webp`,
    ],
    featured: false,
  },
  {
    id: "018",
    reference: "BA018",
    name: "Coiled Statement Ring",
    slug: "coiled-statement-ring",
    description: "A bold ring with intricately coiled wire forming a dramatic silhouette. Designed for those who wear their individuality as a statement.",
    price: 800,
    currency: "ETB",
    category: "Rings",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/5. Rings/5.4 Women ring/IMG_0476.webp`,
      `${IMG}/5. Rings/5.4 Women ring/IMG_1997.webp`,
      `${IMG}/5. Rings/5.4 Women ring/IMG_2002.webp`,
      `${IMG}/5. Rings/5.4 Women ring/IMG_2014.webp`,
    ],
    featured: false,
  },
  {
    id: "019",
    reference: "BA019",
    name: "Twisted Band Ring",
    slug: "twisted-band-ring",
    description: "A beautifully twisted band ring with an organic, hand-shaped aesthetic. Lightweight and comfortable for all-day wear.",
    price: 650,
    currency: "ETB",
    category: "Rings",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/5. Rings/5.5 Women ring/IMG_1916.webp`,
      `${IMG}/5. Rings/5.5 Women ring/IMG_1917.webp`,
      `${IMG}/5. Rings/5.5 Women ring/IMG_1919.webp`,
      `${IMG}/5. Rings/5.5 Women ring/IMG_1923.webp`,
      `${IMG}/5. Rings/5.5 Women ring/IMG_2544.webp`,
    ],
    featured: false,
  },
  {
    id: "020",
    reference: "BA020",
    name: "Delicate Wire Ring",
    slug: "delicate-wire-ring",
    description: "A fine and delicate ring that showcases the beauty of minimal wire work. Perfect as a standalone piece or part of a stack.",
    price: 700,
    currency: "ETB",
    category: "Rings",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/5. Rings/5.6/IMG_1003.webp`,
    ],
    featured: false,
  },
  {
    id: "021",
    reference: "BA021",
    name: "Wrapped Wire Ring",
    slug: "wrapped-wire-ring",
    description: "A uniquely wrapped ring design where layers of wire create depth and texture. A conversation piece that celebrates handcraftsmanship.",
    price: 850,
    currency: "ETB",
    category: "Rings",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/5. Rings/5.7/IMG_0537.webp`,
    ],
    featured: false,
  },

  // ═══════════════════════════════════════════════════════════════
  // 6. RING SETS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "022",
    reference: "BA022",
    name: "Ring Set with Bracelet",
    slug: "ring-set-with-bracelet",
    description: "A curated set of coordinated rings paired with a matching bracelet. Available as a ring set alone or with the bracelet for a complete look.",
    price: 2700,
    currency: "ETB",
    category: "Ring Sets",
    materials: ["Wire", "Beads"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/5. Rings/6.1 Ring set with braclet/FE463B6C-3AFB-4CD2-A2DA-5F1EE0535FFB.webp`,
      `${IMG}/5. Rings/6.1 Ring set with braclet/IMG_1666.webp`,
      `${IMG}/5. Rings/6.1 Ring set with braclet/IMG_1667.webp`,
      `${IMG}/5. Rings/6.1 Ring set with braclet/IMG_1689.webp`,
      `${IMG}/5. Rings/6.1 Ring set with braclet/IMG_1709.webp`,
      `${IMG}/5. Rings/6.1 Ring set with braclet/IMG_1716.webp`,
    ],
    featured: true,
  },

  // ═══════════════════════════════════════════════════════════════
  // 7. ADDITIONAL RINGS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "023",
    reference: "BA023",
    name: "Signature Ring",
    slug: "signature-ring",
    description: "A distinctive signature ring from Biruh Adorn's exclusive collection. Contact us for pricing and availability.",
    price: 900,
    currency: "ETB",
    category: "Rings",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "Made to Order",
    images: [
      `${IMG}/5. Rings/7.1/IMG_0818.webp`,
      `${IMG}/5. Rings/7.1/IMG_5057.webp`,
      `${IMG}/5. Rings/7.1/IMG_5058.webp`,
      `${IMG}/5. Rings/7.1/IMG_5059.webp`,
      `${IMG}/5. Rings/7.1/IMG_5060.webp`,
      `${IMG}/5. Rings/7.1/IMG_5061.webp`,
    ],
    featured: false,
  },

  // ═══════════════════════════════════════════════════════════════
  // 8. EAR CUFF
  // ═══════════════════════════════════════════════════════════════
  {
    id: "024",
    reference: "BA024",
    name: "Ear Cuff",
    slug: "ear-cuff",
    description: "A modern ear cuff that adds edge and personality without requiring a piercing. Sculpted from wire for a secure and comfortable fit.",
    price: 900,
    currency: "ETB",
    category: "Ear Cuffs",
    materials: ["Wire"],
    colors: ["Gold"],
    availability: "In Stock",
    images: [
      `${IMG}/8 .Ear cuff/8 Ear cuff/IMG_3093.webp`,
      `${IMG}/8 .Ear cuff/8 Ear cuff/IMG_3094.webp`,
      `${IMG}/8 .Ear cuff/8 Ear cuff/IMG_3095.webp`,
    ],
    featured: false,
  },
];

// ─── Isolated Development Fixture ───────────────────────────────
const devFixture: Product | null = null;

export async function getProducts(debug: boolean = false): Promise<Product[]> {
  return products;
}

export async function getProductBySlug(slug: string, debug: boolean = false): Promise<Product | undefined> {
  const allProducts = await getProducts(debug);
  return allProducts.find((p) => p.slug === slug);
}

export async function getCategories(debug: boolean = false): Promise<string[]> {
  const allProducts = await getProducts(debug);
  const categories = new Set(allProducts.map((p) => p.category));
  return Array.from(categories);
}

export async function getCollections(debug: boolean = false): Promise<string[]> {
  const allProducts = await getProducts(debug);
  const collections = new Set(allProducts.map((p) => p.collection).filter(Boolean) as string[]);
  return Array.from(collections);
}

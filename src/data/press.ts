export interface PressMention {
  id: string;
  publication: string;
  headline: string;
  excerpt: string;
  url?: string;
  date: string;
  featuredImage?: string;
}

// Production Catalogue is strictly empty by default.
export const pressMentions: PressMention[] = [];

// Isolated Development Fixtures
const devFixtures: PressMention[] = [
  {
    id: "dev-press-001",
    publication: "Editorial Design Quarterly",
    headline: "The Architecture of Adornment",
    excerpt: "Biruh Adorn continues to challenge the boundary between fashion design and sculptural jewelry, treating wire as a foundational building material rather than a mere decorative element.",
    date: "2026-05-12",
    featuredImage: "" // Empty triggers ImageSlot
  }
];

export async function getPressMentions(debug: boolean = false): Promise<PressMention[]> {
  if (debug) {
    return [...pressMentions, ...devFixtures];
  }
  return pressMentions;
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorContext?: string; // e.g., "Custom Engagement Ring Client"
  quote: string;
  featured: boolean;
}

// Production Catalogue is strictly empty by default.
export const testimonials: Testimonial[] = [];

// Isolated Development Fixtures
const devFixtures: Testimonial[] = [
  {
    id: "dev-test-001",
    authorName: "A. M.",
    authorContext: "Custom Commission",
    quote: "Working with Biruh felt less like a transaction and more like a deeply personal creative dialogue. The piece perfectly captures the movement we discussed.",
    featured: true
  },
  {
    id: "dev-test-002",
    authorName: "Sarah K.",
    authorContext: "Aurora Collection",
    quote: "The structural elegance of the ring is remarkable. It commands presence while feeling entirely natural on the hand.",
    featured: true
  }
];

export async function getTestimonials(debug: boolean = false): Promise<Testimonial[]> {
  if (debug) {
    return [...testimonials, ...devFixtures];
  }
  return testimonials;
}

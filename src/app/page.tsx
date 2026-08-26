import { Hero } from "../components/sections/Hero";
import { BrandIntroduction } from "../components/sections/BrandIntroduction";
import { FeaturedJewelry } from "../components/sections/FeaturedJewelry";
import { Craftsmanship } from "../components/sections/Craftsmanship";
import { EmpoweringJewelry } from "../components/sections/EmpoweringJewelry";
import { CollectionsPreview } from "../components/sections/CollectionsPreview";
import { CustomJewelry } from "../components/sections/CustomJewelry";
import { Founder } from "../components/sections/Founder";
import { ServicesPreview } from "../components/sections/ServicesPreview";

import { FinalCTA } from "../components/sections/FinalCTA";
import { TestimonialsPreview } from "../components/social/TestimonialsPreview";
import { InstagramPreview } from "../components/social/InstagramPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntroduction />
      <FeaturedJewelry />
      <Craftsmanship />
      <EmpoweringJewelry />
      <CollectionsPreview />
      <CustomJewelry />
      <Founder />
      <ServicesPreview />
      <TestimonialsPreview />
      <InstagramPreview />

      <FinalCTA />
    </>
  );
}

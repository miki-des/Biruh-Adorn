import React from "react";
import { Metadata } from "next";
import { AboutHero } from "../../components/about/AboutHero";
import { FounderStory } from "../../components/about/FounderStory";
import { FashionToJewelry } from "../../components/about/FashionToJewelry";
import { MaterialStory } from "../../components/about/MaterialStory";
import { MaterialMovementForm } from "../../components/about/MaterialMovementForm";
import { EmpoweringJewelry } from "../../components/about/EmpoweringJewelry";
import { CraftsmanshipStory } from "../../components/about/CraftsmanshipStory";
import { AboutCTA } from "../../components/about/AboutCTA";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About | Biruh Adorn",
  description: "Discover the art of becoming form. Biruh Adorn is a contemporary jewelry art house founded by Biruh Getnet Aklog, creating empowering pieces through material, movement, and form.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <AboutHero />
      <FounderStory />
      <FashionToJewelry />
      <MaterialStory />
      <MaterialMovementForm />
      <EmpoweringJewelry />
      <CraftsmanshipStory />
      <AboutCTA />
    </div>
  );
}

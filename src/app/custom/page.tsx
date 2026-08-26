import React from "react";
import { Metadata } from "next";
import { CustomHero } from "../../components/custom/CustomHero";
import { CustomProcess } from "../../components/custom/CustomProcess";
import { InspirationGuide } from "../../components/custom/InspirationGuide";
import { ConsultationForm } from "../../components/custom/ConsultationForm";
import { CustomCTA } from "../../components/custom/CustomCTA";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Custom Jewelry Consultation | Biruh Adorn",
  description: "Start a personal design consultation with Biruh Adorn to create bespoke, contemporary jewelry tailored to your vision.",
};

export default function CustomPage() {
  return (
    <div className={styles.page}>
      <CustomHero />
      <CustomProcess />
      
      <div id="consultation-form" className={styles.formSection}>
        <div className={styles.formLayout}>
          <div className={styles.guideColumn}>
            <InspirationGuide />
          </div>
          <div className={styles.formColumn}>
            <ConsultationForm />
          </div>
        </div>
      </div>
      
      <CustomCTA />
    </div>
  );
}

import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { ImageSlot } from "../ui/ImageSlot";
import styles from "./Craftsmanship.module.css";

export function Craftsmanship() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.visuals}>
            <ImageSlot
              src="/Assets/bruih_pictures/9 %26 10 Extra assets/IMG_0838.webp"
              alt="Biruh Adorn jewelry collection spread"
              aspectRatio="3:4"
              label="Craftsmanship: Workshop View"
            />
            {/* Signature motion wire element */}
            <div className={styles.wireContainer} aria-hidden="true">
              <svg viewBox="0 0 200 400" className={styles.wireSvg}>
                <path 
                  d="M100,0 C100,100 0,150 50,200 C100,250 200,300 100,400" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1"
                />
              </svg>
            </div>
            <div className={styles.secondaryVisual}>
              <ImageSlot
                src="/Assets/bruih_pictures/9 %26 10 Extra assets/IMG_1068.webp"
                alt="Rings on hand closeup"
                aspectRatio="1:1"
                label="Craftsmanship: Detail"
              />
            </div>
          </div>
          
          <div className={styles.narrative}>
            <Typography variant="h3" as="h2" className={styles.title}>
              The Art of Wire
            </Typography>
            
            <div className={styles.steps}>
              <div className={styles.step}>
                <Typography variant="reference">Material</Typography>
                <Typography variant="body-sm" className={styles.desc}>
                  Raw copper and stainless steel selected for strength and character.
                </Typography>
              </div>
              <div className={styles.step}>
                <Typography variant="reference">Movement</Typography>
                <Typography variant="body-sm" className={styles.desc}>
                  Twisting and wrapping by hand, forcing the metal to yield to intention.
                </Typography>
              </div>
              <div className={styles.step}>
                <Typography variant="reference">Form</Typography>
                <Typography variant="body-sm" className={styles.desc}>
                  Coiling and sculpting into an architectural silhouette.
                </Typography>
              </div>
              <div className={styles.step}>
                <Typography variant="reference">Jewelry</Typography>
                <Typography variant="body-sm" className={styles.desc}>
                  The final piece—bold, enduring, and unmistakable.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

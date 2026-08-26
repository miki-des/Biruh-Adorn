import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { ImageSlot } from "../ui/ImageSlot";
import styles from "./CraftsmanshipStory.module.css";

export function CraftsmanshipStory() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.textColumn}>
          <Typography variant="h2" as="h2" className={styles.title}>
            The Craft
          </Typography>
          <Typography variant="body-lg" className={styles.bodyText}>
            Every piece is built by hand.
          </Typography>
          <Typography variant="body" className={styles.bodyText}>
            The creation process relies on careful structural manipulation—twisting, coiling, and wrapping—ensuring that each creation maintains the integrity of both material and design.
          </Typography>
        </div>
        <div className={styles.imageColumn}>
          <ImageSlot 
            src="/Assets/bruih_pictures/9 %26 10 Extra assets/IMG_2988.webp"
            alt="Biruh Adorn jewelry laid out on display"
            aspectRatio="4:3" 
            label="Editorial: Craftsmanship in Progress" 
          />
        </div>
      </Container>
    </section>
  );
}

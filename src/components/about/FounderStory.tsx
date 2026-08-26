import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { ImageSlot } from "../ui/ImageSlot";
import styles from "./FounderStory.module.css";

export function FounderStory() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.imageColumn}>
          <ImageSlot 
            src="/Assets/bruih_pictures/9 %26 10 Extra assets/IMG_3999.webp"
            alt="Biruh Getnet Aklog at jewelry exhibition"
            aspectRatio="3:4" 
            label="Biruh Getnet Aklog" 
          />
        </div>
        <div className={styles.textColumn}>
          <Typography variant="h3" as="h2" className={styles.name}>
            Biruh Getnet Aklog
          </Typography>
          <div className={styles.divider} aria-hidden="true" />
          <Typography variant="body-lg" className={styles.bodyText}>
            With a foundational background in fashion design, Biruh approaches jewelry not merely as an accessory, but as an architectural extension of the wearer.
          </Typography>
          <Typography variant="body" className={styles.bodyText}>
            Biruh Adorn was established to explore the relationship between the body, movement, and structural form. Each handcrafted piece reflects a deeply personal aesthetic language where bold, contemporary expression meets meticulous artisanal technique.
          </Typography>
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { ImageSlot } from "../ui/ImageSlot";
import styles from "./AboutHero.module.css";

export function AboutHero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Typography variant="reference" className={styles.eyebrow}>
            Contemporary Jewelry Art House
          </Typography>
          <Typography variant="display-lg" as="h1" className={styles.title}>
            THE ART OF <br/>
            BECOMING FORM.
          </Typography>
        </div>
        <div className={styles.imageWrapper}>
          <ImageSlot 
            src="/Assets/bruih_pictures/9 %26 10 Extra assets/IMG_2546.webp"
            alt="Biruh Adorn rings on hand"
            aspectRatio="3:4" 
            label="Editorial Jewelry Composition" 
            priority
          />
        </div>
      </Container>
    </section>
  );
}

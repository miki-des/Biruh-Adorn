import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { ImageSlot } from "../ui/ImageSlot";
import styles from "./CustomHero.module.css";

export function CustomHero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Typography variant="reference" className={styles.label}>
            Bespoke Service
          </Typography>
          <Typography variant="display-lg" as="h1" className={styles.title}>
            YOUR IDEA.<br/>
            YOUR FORM.<br/>
            YOUR JEWELRY.
          </Typography>
          
          <Typography variant="body-lg" className={styles.description}>
            Custom jewelry is an opportunity to create something entirely personal. We work with you to translate your vision into a contemporary, handcrafted piece.
          </Typography>

          <div className={styles.actions}>
            <a href="#consultation-form" className={styles.primaryAction}>
              Start Your Consultation
            </a>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <ImageSlot 
            src="/Assets/bruih_pictures/9 %26 10 Extra assets/IMG_2546.webp"
            alt="Biruh Adorn rings worn on hand — bespoke craftsmanship"
            aspectRatio="3:4" 
            label="Consultation: Workshop / Process" 
            priority
          />
        </div>
      </Container>
    </section>
  );
}

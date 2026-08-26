import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { ImageSlot } from "../ui/ImageSlot";
import styles from "./EmpoweringJewelry.module.css";

export function EmpoweringJewelry() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.imageWrapper}>
          <ImageSlot
            src="/Assets/bruih_pictures/9 %26 10 Extra assets/IMG_2536.webp"
            alt="Model wearing Biruh Adorn jewelry"
            aspectRatio="3:4"
            label="Editorial Portrait: Empowering"
          />
        </div>
        
        <div className={styles.content}>
          <Typography variant="display-lg" as="h2" className={styles.statement}>
            Empowering Jewelry
          </Typography>
          <div className={styles.divider} aria-hidden="true" />
          <Typography variant="body-lg" as="p" className={styles.body}>
            True elegance is never quiet. Our pieces are designed for those who wear their individuality as a statement—bold, handcrafted, and unmistakable.
          </Typography>
        </div>
      </Container>
    </section>
  );
}

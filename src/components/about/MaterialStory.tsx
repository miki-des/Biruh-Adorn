import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { ImageSlot } from "../ui/ImageSlot";
import styles from "./MaterialStory.module.css";

export function MaterialStory() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.textColumn}>
          <Typography variant="h2" as="h2" className={styles.title}>
            The Material
          </Typography>
          <Typography variant="body-lg" className={styles.bodyText}>
            Material is not simply something to decorate with. It can move. It can bend. It can coil. It can become structure.
          </Typography>
          <Typography variant="body" className={styles.bodyText}>
            Wire provides a unique medium for structural exploration. Its inherent tension and flexibility allow it to capture the fluidity of fashion within a rigid, wearable form.
          </Typography>
        </div>
        <div className={styles.imageColumn}>
          <ImageSlot 
            src="/Assets/bruih_pictures/9 %26 10 Extra assets/IMG_0881.webp"
            alt="Biruh Adorn rings worn on hand"
            aspectRatio="4:3" 
            label="Detail: Wire Material" 
          />
        </div>
      </Container>
    </section>
  );
}

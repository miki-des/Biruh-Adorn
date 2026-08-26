import React from "react";
import Link from "next/link";
import { Container, Grid } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { ImageSlot } from "../ui/ImageSlot";
import styles from "./CollectionsPreview.module.css";

export function CollectionsPreview() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Typography variant="h3" as="h2" className={styles.title}>
            Collections
          </Typography>
          <Typography variant="body" className={styles.subtitle}>
            A study in color and form.
          </Typography>
        </div>

        <Grid className={styles.grid}>
          <Link href="/jewelry" className={styles.collectionCard}>
            <div className={styles.imageWrapper}>
              <ImageSlot
                src="/Assets/bruih_pictures/1. Necklaces/stone-necklace_1.1/IMG_2168.webp"
                alt="Necklaces collection preview"
                aspectRatio="4:3"
                label="Collection Preview: Necklaces"
                className={styles.imageSlot}
              />
            </div>
            <div className={styles.content}>
              <Typography variant="h4" as="h3">Necklaces</Typography>
              <Typography variant="reference" className={styles.action}>View in Gallery</Typography>
            </div>
          </Link>

          <Link href="/jewelry" className={styles.collectionCard}>
            <div className={styles.imageWrapper}>
              <ImageSlot
                src="/Assets/bruih_pictures/5. Rings/6.1 Ring set with braclet/IMG_1716.webp"
                alt="Rings & Sets collection preview"
                aspectRatio="4:3"
                label="Collection Preview: Rings"
                className={styles.imageSlot}
              />
            </div>
            <div className={styles.content}>
              <Typography variant="h4" as="h3">Rings &amp; Sets</Typography>
              <Typography variant="reference" className={styles.action}>View in Gallery</Typography>
            </div>
          </Link>
        </Grid>
      </Container>
    </section>
  );
}

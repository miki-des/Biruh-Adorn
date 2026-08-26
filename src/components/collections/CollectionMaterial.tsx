import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { Collection } from "../../data/collections";
import styles from "./CollectionMaterial.module.css";

interface CollectionMaterialProps {
  collection: Collection;
}

export function CollectionMaterial({ collection }: CollectionMaterialProps) {
  // If no mood is defined, we skip this section to keep it honest.
  if (!collection.mood) {
    return null;
  }

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Typography variant="reference" className={styles.eyebrow}>
            Material / Movement / Form
          </Typography>
          <Typography variant="display-lg" as="h2" className={styles.mood}>
            {collection.mood}
          </Typography>
        </div>
      </Container>
    </section>
  );
}

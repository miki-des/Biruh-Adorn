import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import styles from "./CollectionsHero.module.css";

export function CollectionsHero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Typography variant="display-lg" as="h1" className={styles.title}>
            Curated expressions of material, movement and form.
          </Typography>
        </div>
      </Container>
    </section>
  );
}

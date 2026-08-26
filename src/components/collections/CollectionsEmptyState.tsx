import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { LinkButton } from "../ui/Button";
import styles from "./CollectionsEmptyState.module.css";

export function CollectionsEmptyState() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrowLine} aria-hidden="true" />
          <Typography variant="display-lg" as="h2" className={styles.title}>
            Collections are currently being curated.
          </Typography>
          <Typography variant="body" className={styles.description}>
            Our upcoming narratives of material, movement, and form will be presented here. In the meantime, you are invited to explore the individual pieces currently available in the gallery.
          </Typography>
          <div className={styles.action}>
            <LinkButton href="/jewelry" variant="primary">
              Explore Jewelry
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import styles from "./CollectionCTA.module.css";

export function CollectionCTA() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Typography variant="display-lg" as="h2" className={styles.statement}>
            Explore Further
          </Typography>
          
          <div className={styles.actions}>
            <LinkButton href="/jewelry" variant="primary">
              All Jewelry
            </LinkButton>
            <LinkButton href="/custom" variant="secondary">
              Create Custom
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

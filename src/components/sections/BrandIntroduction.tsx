import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import styles from "./BrandIntroduction.module.css";

export function BrandIntroduction() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Typography variant="display-lg" as="h2" className={styles.statement}>
            Contemporary jewelry shaped by hand.
          </Typography>
          <div className={styles.divider} aria-hidden="true" />
          <Typography variant="body-lg" as="p" className={styles.body}>
            We manipulate copper wire, stainless steel, and carefully selected natural materials into bold, artistic forms. Every piece is an expression of individuality, designed to empower the wearer.
          </Typography>
        </div>
      </Container>
    </section>
  );
}

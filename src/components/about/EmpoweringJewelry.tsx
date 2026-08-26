import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import styles from "./EmpoweringJewelry.module.css";

export function EmpoweringJewelry() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrowLine} aria-hidden="true" />
          <Typography variant="display-lg" as="h2" className={styles.statement}>
            EMPOWERING<br/>
            JEWELRY.
          </Typography>
        </div>
      </Container>
    </section>
  );
}

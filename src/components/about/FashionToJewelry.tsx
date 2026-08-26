import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import styles from "./FashionToJewelry.module.css";

export function FashionToJewelry() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.sequence}>
          <div className={styles.step}>
            <Typography variant="reference" className={styles.label}>Perspective</Typography>
            <Typography variant="h3" as="h3" className={styles.word}>Fashion</Typography>
          </div>
          
          <div className={styles.arrow} aria-hidden="true">↓</div>
          
          <div className={styles.step}>
            <Typography variant="reference" className={styles.label}>Structure</Typography>
            <Typography variant="h3" as="h3" className={styles.word}>Form</Typography>
          </div>
          
          <div className={styles.arrow} aria-hidden="true">↓</div>
          
          <div className={styles.step}>
            <Typography variant="reference" className={styles.label}>Expression</Typography>
            <Typography variant="h3" as="h3" className={styles.word}>Movement</Typography>
          </div>
          
          <div className={styles.arrow} aria-hidden="true">↓</div>
          
          <div className={styles.step}>
            <Typography variant="reference" className={styles.label}>Purpose</Typography>
            <Typography variant="h3" as="h3" className={styles.word}>Adornment</Typography>
          </div>

          <div className={styles.arrow} aria-hidden="true">↓</div>

          <div className={styles.stepFinal}>
            <Typography variant="display-lg" as="h2" className={styles.finalWord}>
              Jewelry
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
}

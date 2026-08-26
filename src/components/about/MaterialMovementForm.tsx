import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import styles from "./MaterialMovementForm.module.css";

export function MaterialMovementForm() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.graphicWrapper} aria-hidden="true">
          {/* Subtle animated wire graphic mimicking the homepage */}
          <svg viewBox="0 0 100 400" className={styles.wireSvg} preserveAspectRatio="none">
            <path 
              className={styles.wirePath} 
              d="M50 0 C20 100, 80 200, 50 300 C20 350, 50 400, 50 400" 
            />
          </svg>
        </div>
        
        <div className={styles.stages}>
          <div className={styles.stage}>
            <Typography variant="reference" className={styles.num}>01</Typography>
            <Typography variant="h3" as="h3" className={styles.word}>Material</Typography>
          </div>
          <div className={styles.stage}>
            <Typography variant="reference" className={styles.num}>02</Typography>
            <Typography variant="h3" as="h3" className={styles.word}>Movement</Typography>
          </div>
          <div className={styles.stage}>
            <Typography variant="reference" className={styles.num}>03</Typography>
            <Typography variant="h3" as="h3" className={styles.word}>Form</Typography>
          </div>
          <div className={styles.stage}>
            <Typography variant="reference" className={styles.num}>04</Typography>
            <Typography variant="h3" as="h3" className={styles.word}>Jewelry</Typography>
          </div>
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import styles from "./CustomCTA.module.css";

export function CustomCTA() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Typography variant="display-xl" as="h2" className={styles.statement}>
            Empowering Jewelry
          </Typography>
          
          <div className={styles.actions}>
            <a href="#consultation-form" className={styles.primaryAction}>
              Start Your Consultation
            </a>
            <LinkButton href="/jewelry" variant="secondary">
              Explore Jewelry
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

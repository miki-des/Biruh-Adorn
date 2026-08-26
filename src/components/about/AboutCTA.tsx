import React from "react";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Grid";
import styles from "./AboutCTA.module.css";

export function AboutCTA() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.actions}>
          <LinkButton href="/jewelry" variant="primary">
            Explore Jewelry
          </LinkButton>
          <LinkButton href="/custom" variant="secondary">
            Create Custom
          </LinkButton>
        </div>
      </Container>  
    </section>
  );
}

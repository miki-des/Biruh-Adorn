import React from "react";
import { Typography } from "../ui/Typography";
import styles from "./InspirationGuide.module.css";

export function InspirationGuide() {
  return (
    <div className={styles.guide}>
      <Typography variant="h3" as="h2" className={styles.title}>
        Inspiration & Details
      </Typography>
      
      <div className={styles.divider} aria-hidden="true" />
      
      <Typography variant="body" className={styles.text}>
        You do not need a perfectly formed design to begin a consultation. Share your ideas, preferred materials, and sizing below. 
      </Typography>

      <Typography variant="body" className={styles.highlightText}>
        Have reference images or sketches? You can share these directly with us in WhatsApp once your consultation conversation opens.
      </Typography>
    </div>
  );
}

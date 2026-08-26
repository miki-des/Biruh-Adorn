import React from "react";
import Link from "next/link";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { ImageSlot } from "../ui/ImageSlot";
import styles from "./Founder.module.css";

export function Founder() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.imageWrapper}>
          <ImageSlot
            src="/Assets/bruih_pictures/9 %26 10 Extra assets/IMG_3999.webp"
            alt="Biruh Getnet Aklog at a jewelry exhibition"
            aspectRatio="3:4"
            label="Founder Portrait: Biruh Getnet Aklog"
          />
        </div>
        
        <div className={styles.content}>
          <Typography variant="reference" className={styles.label}>
            The Maker
          </Typography>
          <Typography variant="display-lg" as="h2" className={styles.name}>
            Biruh Getnet Aklog
          </Typography>
          
          <Typography variant="body-lg" as="p" className={styles.bio}>
            Designer and maker. With a background in fashion design (BSc &amp; MSc), Biruh approaches jewelry as an architectural and artistic extension of the body.
          </Typography>

          <Link href="/about" className={styles.link}>
            <Typography variant="reference">Read the Story</Typography>
          </Link>
        </div>
      </Container>
    </section>
  );
}

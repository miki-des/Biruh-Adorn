import React from "react";
import { Typography } from "../ui/Typography";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Grid";
import { ImageSlot } from "../ui/ImageSlot";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <ImageSlot 
          src="/Assets/bruih_pictures/9 %26 10 Extra assets/IMG_2040.webp"
          alt="Biruh Adorn handcrafted jewelry collection"
          aspectRatio="auto" 
          label="Hero Campaign Media" 
          priority 
          className={styles.imageSlot}
        />
        <div className={styles.overlay} />
      </div>

      <Container className={styles.content}>
        <div className={styles.textContainer}>
          <Typography variant="display-xl" as="h1" className={styles.title}>
            Biruh Adorn
          </Typography>
          <div className={styles.wireDetail} aria-hidden="true">
            <svg viewBox="0 0 100 20" preserveAspectRatio="none" className={styles.wireSvg}>
              <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <Typography variant="h3" as="p" className={styles.tagline}>
            Empowering Jewelry
          </Typography>
          
          <div className={styles.actions}>
            <LinkButton href="/jewelry" variant="primary">
              Explore Jewelry
            </LinkButton>
            <LinkButton href="/custom" variant="secondary">
              Custom Jewelry
            </LinkButton>
          </div>
        </div>
        
        <div className={styles.scrollIndicator}>
          <Typography variant="reference" as="span">
            Scroll to discover
          </Typography>
          <span className={styles.scrollLine} />
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import { Container, Grid } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { ImageSlot } from "../ui/ImageSlot";
import { socialConfig } from "../../config/social";
import styles from "./SocialPreview.module.css";

const socialImages = [
  { src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400", alt: "Jewelry on display" },
  { src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400", alt: "Crafting process" },
  { src: "https://images.unsplash.com/photo-1602751584552-8ba73aad10ee?auto=format&fit=crop&q=80&w=400", alt: "Detail shot" },
  { src: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80&w=400", alt: "Studio work" },
];

export function SocialPreview() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Typography variant="h3" as="h2" className={styles.title}>
            The World of Biruh Adorn
          </Typography>
          <a href={socialConfig.instagram.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <Typography variant="reference">{socialConfig.instagram.handle}</Typography>
          </a>
        </div>

        <Grid className={styles.grid}>
          {socialImages.map((img, i) => (
            <div key={i} className={styles.item}>
              <ImageSlot src={img.src} alt={img.alt} aspectRatio="1:1" label={`Instagram Post ${i + 1}`} />
            </div>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

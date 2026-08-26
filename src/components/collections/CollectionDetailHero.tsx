import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { ImageSlot } from "../ui/ImageSlot";
import { Collection } from "../../data/collections";
import styles from "./CollectionDetailHero.module.css";

interface CollectionDetailHeroProps {
  collection: Collection;
}

export function CollectionDetailHero({ collection }: CollectionDetailHeroProps) {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Typography variant="reference" className={styles.eyebrow}>
            Collection
          </Typography>
          <Typography variant="display-xl" as="h1" className={styles.title}>
            {collection.name}
          </Typography>
          <Typography variant="h4" className={styles.subtitle}>
            {collection.subtitle}
          </Typography>
        </div>
        
        <div className={styles.heroImageWrapper}>
          <ImageSlot 
            src={collection.heroImage}
            aspectRatio="16:9" 
            label={`Collection Hero: ${collection.name}`} 
            priority
          />
        </div>
      </Container>
    </section>
  );
}

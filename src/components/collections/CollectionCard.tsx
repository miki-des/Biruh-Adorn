import React from "react";
import Link from "next/link";
import { Typography } from "../ui/Typography";
import { ImageSlot } from "../ui/ImageSlot";
import { Collection } from "../../data/collections";
import styles from "./CollectionCard.module.css";

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  // Convert aspect ratio string into fraction string for ImageSlot if needed, or map it.
  const ratioMap = {
    "portrait": "3:4" as const,
    "landscape": "4:3" as const,
    "square": "1:1" as const,
  };
  
  const aspectRatio = ratioMap[collection.coverRatio] || "3:4";

  return (
    <div className={styles.card}>
      <Link href={`/collections/${collection.slug}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <ImageSlot 
            src={collection.coverImage} 
            aspectRatio={aspectRatio} 
            label={`Collection Cover: ${collection.name}`} 
            className={styles.imageSlot}
          />
        </div>
      </Link>
      
      <div className={styles.metadata}>
        <div className={styles.header}>
          <Link href={`/collections/${collection.slug}`} className={styles.titleLink}>
            <Typography variant="h3" as="h2" className={styles.name}>
              {collection.name}
            </Typography>
          </Link>
          <Typography variant="reference" className={styles.subtitle}>
            {collection.subtitle}
          </Typography>
        </div>
        
        <Link href={`/collections/${collection.slug}`} className={styles.cta}>
          Explore Collection
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { CollectionCard } from "./CollectionCard";
import { Collection, getRelatedCollections } from "../../data/collections";
import styles from "./RelatedCollections.module.css";

interface RelatedCollectionsProps {
  collection: Collection;
  debug?: boolean;
}

export async function RelatedCollections({ collection, debug = false }: RelatedCollectionsProps) {
  const related = await getRelatedCollections(collection.id, collection.mood, debug);

  if (!related || related.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Typography variant="h3" as="h2" className={styles.title}>
            Continue Exploring
          </Typography>
        </div>
        
        <div className={styles.grid}>
          {related.map((relCol) => (
            <div key={relCol.id} className={styles.cardWrapper}>
              <CollectionCard collection={relCol} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import { Container } from "../ui/Grid";
import { Collection } from "../../data/collections";
import { CollectionCard } from "./CollectionCard";
import styles from "./CollectionsGrid.module.css";

interface CollectionsGridProps {
  collections: Collection[];
}

export function CollectionsGrid({ collections }: CollectionsGridProps) {
  if (!collections || collections.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className={styles.gridItem}
              data-ratio={collection.coverRatio}
              data-index={index}
            >
              <CollectionCard collection={collection} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { Collection } from "../../data/collections";
import styles from "./CollectionStory.module.css";

interface CollectionStoryProps {
  collection: Collection;
}

export function CollectionStory({ collection }: CollectionStoryProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Typography variant="body-lg" className={styles.description}>
            {collection.description}
          </Typography>
        </div>
      </Container>
    </section>
  );
}

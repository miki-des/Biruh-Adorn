import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { ProductGrid } from "../product/ProductGrid";
import { getProducts } from "../../data/products";
import { Collection } from "../../data/collections";
import styles from "./FeaturedPieces.module.css";

interface FeaturedPiecesProps {
  collection: Collection;
  debug?: boolean;
}

export async function FeaturedPieces({ collection, debug = false }: FeaturedPiecesProps) {
  const allProducts = await getProducts(debug);
  
  // Filter products matching this collection name
  const collectionProducts = allProducts.filter(
    (p) => p.collection?.toLowerCase() === collection.name.toLowerCase()
  );

  // Maximum of 6 pieces to preserve editorial balance
  const featured = collectionProducts.slice(0, 6);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Typography variant="h3" as="h2" className={styles.title}>
            Featured Pieces
          </Typography>
        </div>
        <ProductGrid products={featured} />
      </Container>
    </section>
  );
}

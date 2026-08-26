import React from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../../data/products";
import { Typography } from "../ui/Typography";
import styles from "./RelatedProducts.module.css";

interface RelatedProductsProps {
  products: Product[];
  currentProductId: string;
}

export function RelatedProducts({ products, currentProductId }: RelatedProductsProps) {
  // Filter out the current product and take up to 3 related ones
  const related = products.filter(p => p.id !== currentProductId).slice(0, 3);

  if (!related || related.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Typography variant="h3" as="h2">Related Pieces</Typography>
      </div>
      
      <div className={styles.grid}>
        {related.map(product => (
          <div key={product.id} className={styles.item}>
            <ProductCard product={product} aspectRatio="1:1" />
          </div>
        ))}
      </div>
    </section>
  );
}

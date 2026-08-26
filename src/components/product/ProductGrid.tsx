import React from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../../data/products";
import styles from "./ProductGrid.module.css";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  // If array is empty, this should not render (handled by parent EmptyState)
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className={styles.grid}>
      {products.map((product, index) => {
        // Create an asymmetrical layout by varying aspect ratios based on index
        const isFeatured = index % 5 === 0;
        const aspectRatio = isFeatured ? "3:4" : (index % 2 === 0 ? "1:1" : "4:3");
        
        return (
          <div key={product.id} className={isFeatured ? styles.featuredItem : styles.standardItem}>
            <ProductCard product={product} aspectRatio={aspectRatio} />
          </div>
        );
      })}
    </div>
  );
}

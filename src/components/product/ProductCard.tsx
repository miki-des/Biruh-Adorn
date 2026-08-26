import React from "react";
import Link from "next/link";
import { Typography } from "../ui/Typography";
import { ImageSlot } from "../ui/ImageSlot";
import { Product } from "../../data/products";
import { ProductInquiry } from "./ProductInquiry";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  aspectRatio?: "3:4" | "1:1" | "4:3";
}

export function ProductCard({ product, aspectRatio = "3:4" }: ProductCardProps) {
  const primaryImage = product.images.length > 0 ? product.images[0] : undefined;
  
  // Format price
  const formattedPrice = new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: product.currency,
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className={styles.card}>
      <Link href={`/jewelry/${product.slug}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <ImageSlot 
            src={primaryImage} 
            aspectRatio={aspectRatio} 
            label={`Product: ${product.name}`} 
            className={styles.imageSlot}
          />
        </div>
      </Link>
      
      <div className={styles.metadata}>
        <Link href={`/jewelry/${product.slug}`} className={styles.titleLink}>
          <Typography variant="h4" as="h3" className={styles.name}>
            {product.name}
          </Typography>
        </Link>
        
        <div className={styles.metaRow}>
          <Typography variant="reference" className={styles.reference}>
            REF. {product.reference}
          </Typography>
          <Typography variant="price" className={styles.price}>
            {formattedPrice}
          </Typography>
        </div>
        
        <div className={styles.actions}>
          <ProductInquiry product={product} variant="minimal" />
        </div>
      </div>
    </div>
  );
}

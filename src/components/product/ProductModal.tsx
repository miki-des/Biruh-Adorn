"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { Product } from "../../data/products";
import { ProductInquiry } from "./ProductInquiry";
import styles from "./ProductModal.module.css";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeImage, setActiveImage] = React.useState(0);

  const formattedPrice = new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: product.currency,
    maximumFractionDigits: 0,
  }).format(product.price);

  // Close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const primaryImage = product.images.length > 0 ? product.images[activeImage] : null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Image Area */}
        <div className={styles.imageArea}>
          {primaryImage ? (
            <div className={styles.mainImage}>
              <Image
                src={primaryImage}
                alt={product.name}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          ) : (
            <div className={styles.placeholder}>
              <span>No Image</span>
            </div>
          )}

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className={styles.thumbnails}>
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${i === activeImage ? styles.thumbActive : ""}`}
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <Image src={img} alt="" fill sizes="80px" className={styles.thumbImg} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details Area */}
        <div className={styles.details}>
          <div className={styles.detailsInner}>
            <span className={styles.reference}>REF. {product.reference}</span>
            <h2 className={styles.name}>{product.name}</h2>
            <span className={styles.price}>{formattedPrice}</span>

            <div className={styles.divider} />

            <p className={styles.description}>{product.description}</p>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Materials</span>
                <span className={styles.metaValue}>{product.materials.join(", ")}</span>
              </div>
              {product.collection && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Collection</span>
                  <span className={styles.metaValue}>{product.collection}</span>
                </div>
              )}
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Availability</span>
                <span className={styles.metaValue}>{product.availability}</span>
              </div>
            </div>

            {/* Order Actions */}
            <ProductInquiry product={product} variant="full" />
          </div>
        </div>
      </div>
    </div>
  );
}

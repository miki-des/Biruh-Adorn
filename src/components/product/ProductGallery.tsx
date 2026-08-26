"use client";

import React, { useState } from "react";
import { ImageSlot } from "../ui/ImageSlot";
import styles from "./ProductGallery.module.css";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // If no images exist, fallback to the ImageSlot placeholder
  if (!images || images.length === 0) {
    return (
      <div className={styles.gallery}>
        <div className={styles.mainImage}>
          <ImageSlot aspectRatio="3:4" label={`Product: ${productName}`} priority />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <ImageSlot 
          src={images[activeIndex]} 
          aspectRatio="3:4" 
          label={`Product: ${productName}`} 
          priority 
        />
      </div>
      
      {images.length > 1 && (
        <div className={styles.thumbnails}>
          {images.map((img, idx) => (
            <button 
              key={idx} 
              className={`${styles.thumbnailBtn} ${idx === activeIndex ? styles.active : ""}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1}`}
            >
              <ImageSlot 
                src={img} 
                aspectRatio="1:1" 
                label={`Thumbnail ${idx + 1}`} 
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

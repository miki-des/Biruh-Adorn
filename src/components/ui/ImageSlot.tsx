import React from "react";
import Image from "next/image";
import { Typography } from "./Typography";
import styles from "./ImageSlot.module.css";

type AspectRatio = "16:9" | "4:3" | "3:4" | "1:1" | "2:3" | "auto";

interface ImageSlotProps {
  src?: string;
  alt?: string;
  aspectRatio?: AspectRatio;
  label?: string; // Editorial label for the placeholder state
  className?: string;
  priority?: boolean;
}

export function ImageSlot({
  src,
  alt = "Biruh Adorn Image",
  aspectRatio = "auto",
  label = "Image Slot",
  className = "",
  priority = false,
}: ImageSlotProps) {
  const rootClass = `${styles.slot} ${styles[`aspect-${aspectRatio.replace(":", "")}`]} ${className}`.trim();

  // If real image asset exists
  if (src) {
    return (
      <div className={rootClass}>
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.image}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  // Development Placeholder State (Editorial style)
  return (
    <div className={`${rootClass} ${styles.placeholder}`}>
      <div className={styles.placeholderInner}>
        <div className={styles.placeholderCorners}>
          <span className={styles.cornerTl} />
          <span className={styles.cornerTr} />
          <span className={styles.cornerBl} />
          <span className={styles.cornerBr} />
        </div>
        <Typography variant="reference" className={styles.placeholderLabel}>
          [{label}]
        </Typography>
        <Typography variant="caption" className={styles.placeholderMeta}>
          Awaiting Production Asset
        </Typography>
      </div>
    </div>
  );
}

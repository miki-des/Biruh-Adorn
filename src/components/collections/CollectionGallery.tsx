import React from "react";
import { Container } from "../ui/Grid";
import { ImageSlot } from "../ui/ImageSlot";
import { Collection } from "../../data/collections";
import styles from "./CollectionGallery.module.css";

interface CollectionGalleryProps {
  collection: Collection;
}

export function CollectionGallery({ collection }: CollectionGalleryProps) {
  if (!collection.galleryImages || collection.galleryImages.length === 0) {
    return null;
  }

  // Generate an asymmetrical editorial grid based on the number of images.
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {collection.galleryImages.map((img, index) => {
            // Assign specific ratios to create an editorial flow
            let ratio: "1:1" | "4:3" | "3:4" | "16:9" = "3:4";
            
            // Artificial logic to give images different shapes in the grid
            if (index % 5 === 0) ratio = "16:9";
            else if (index % 3 === 0) ratio = "1:1";
            else if (index % 2 === 0) ratio = "4:3";

            return (
              <div 
                key={index} 
                className={styles.imageItem}
                data-index={index}
                data-ratio={ratio}
              >
                <ImageSlot 
                  src={img} 
                  aspectRatio={ratio} 
                  label={`Editorial Image ${index + 1}`} 
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

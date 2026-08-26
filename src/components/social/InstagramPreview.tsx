import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { ImageSlot } from "../ui/ImageSlot";
import styles from "./InstagramPreview.module.css";

const instagramImages = [
  { src: "/Assets/bruih_pictures/1. Necklaces/stone-necklace_1.1/IMG_0975.webp", label: "Stone Necklace" },
  { src: "/Assets/bruih_pictures/3. Earrings/3.1 Earrings/IMG_0775.webp", label: "Gold Drop Earrings" },
  { src: "/Assets/bruih_pictures/5. Rings/6.1 Ring set with braclet/IMG_1716.webp", label: "Ring Set" },
  { src: "/Assets/bruih_pictures/2. Bracelets/2.1 Three beaded bracelets/IMG_0466.webp", label: "Beaded Bracelets" },
  { src: "/Assets/bruih_pictures/9 %26 10 Extra assets/IMG_2536.webp", label: "Editorial" },
  { src: "/Assets/bruih_pictures/1. Necklaces/chain-necklace_1.2/IMG_3601.webp", label: "Chain Necklace" },
  { src: "/Assets/bruih_pictures/8 .Ear cuff/8 Ear cuff/IMG_3093.webp", label: "Ear Cuff" },
  { src: "/Assets/bruih_pictures/9 %26 10 Extra assets/IMG_1068.webp", label: "Rings Close-up" },
];

// Duplicate the array to create a seamless looping effect
const duplicatedImages = [...instagramImages, ...instagramImages, ...instagramImages, ...instagramImages];

export function InstagramPreview() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Typography variant="reference" className={styles.eyebrow}>
            Visual Journal
          </Typography>
          <a href="#" className={styles.link} aria-label="Visit Biruh Adorn on Instagram">
            <Typography variant="h3" as="h2" className={styles.handle}>
              @BiruhAdorn
            </Typography>
          </a>
        </div>
      </Container>
      
      {/* Marquee edge-to-edge */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {duplicatedImages.map((img, i) => (
            <div key={i} className={styles.imageItem}>
              <ImageSlot src={img.src} alt={img.label} aspectRatio="1:1" label={img.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

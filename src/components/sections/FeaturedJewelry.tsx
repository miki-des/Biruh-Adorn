import React from "react";
import { Container, Grid } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { ImageSlot } from "../ui/ImageSlot";
import { generateWhatsAppUrl } from "../../lib/whatsapp";
import { generateTelegramUrl } from "../../lib/telegram";
import styles from "./FeaturedJewelry.module.css";

export function FeaturedJewelry() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Typography variant="h3" as="h2">
            Featured Works
          </Typography>
        </div>

        <Grid className={styles.grid}>
          {/* Dominant Piece */}
          <div className={styles.dominant}>
            <ImageSlot
              src="/Assets/bruih_pictures/1. Necklaces/stone-necklace_1.1/IMG_0975.webp"
              alt="Stone Necklace"
              aspectRatio="3:4"
              label="Featured Piece: Dominant"
              className={styles.imageSlot}
            />
            <div className={styles.metadata}>
              <Typography variant="h4" as="h3" className={styles.productName}>
                Stone Necklace
              </Typography>
              <div className={styles.metaRow}>
                <Typography variant="reference">REF. BA001</Typography>
                <Typography variant="price">ETB 2,300</Typography>
              </div>
              <div className={styles.inquireActions}>
                <a 
                  href={generateWhatsAppUrl("general")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.inquireLink}
                >
                  <Typography variant="body-sm">WhatsApp</Typography>
                </a>
                <span className={styles.separator}>|</span>
                <a 
                  href={generateTelegramUrl("general")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.inquireLink}
                >
                  <Typography variant="body-sm">Telegram</Typography>
                </a>
              </div>
            </div>
          </div>

          {/* Supporting Pieces */}
          <div className={styles.supporting}>
            <div className={styles.supportItem}>
              <ImageSlot
                src="/Assets/bruih_pictures/1. Necklaces/chain-necklace_1.2/IMG_3601.webp"
                alt="Chain Necklace"
                aspectRatio="1:1"
                label="Featured Piece: Secondary"
                className={styles.imageSlot}
              />
              <div className={styles.metadata}>
                <Typography variant="h4" as="h3" className={styles.productName}>
                  Chain Necklace
                </Typography>
                <div className={styles.metaRow}>
                  <Typography variant="reference">REF. BA002</Typography>
                  <Typography variant="price">ETB 4,500</Typography>
                </div>
              </div>
            </div>

            <div className={styles.supportItem}>
              <ImageSlot
                src="/Assets/bruih_pictures/2. Bracelets/2.1 Three beaded bracelets/IMG_0237.webp"
                alt="Three Beaded Bracelets"
                aspectRatio="4:3"
                label="Featured Piece: Tertiary"
                className={styles.imageSlot}
              />
              <div className={styles.metadata}>
                <Typography variant="h4" as="h3" className={styles.productName}>
                  Three Beaded Bracelets
                </Typography>
                <div className={styles.metaRow}>
                  <Typography variant="reference">REF. BA004</Typography>
                  <Typography variant="price">ETB 2,500</Typography>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
}

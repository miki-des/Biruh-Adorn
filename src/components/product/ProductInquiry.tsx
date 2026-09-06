import React from "react";
import { Typography } from "../ui/Typography";
import { generateWhatsAppUrl } from "../../lib/whatsapp";
import { generateTelegramUrl } from "../../lib/telegram";
import { Product } from "../../data/products";
import styles from "./ProductInquiry.module.css";

interface ProductInquiryProps {
  product: Product;
  variant?: "minimal" | "full";
}

export function ProductInquiry({ product, variant = "minimal" }: ProductInquiryProps) {
  // Use the established utility to construct the URL based on official data
  const whatsappUrl = generateWhatsAppUrl("product", {
    name: product.name,
    reference: product.reference,
  });
  
  const telegramUrl = generateTelegramUrl("product", {
    name: product.name,
    reference: product.reference,
  });

  if (variant === "minimal") {
    return (
      <div className={styles.minimalContainer}>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.inquireLinkMinimal}
        >
          <Typography variant="body-sm">WhatsApp</Typography>
        </a>
        <span className={styles.separator}>|</span>
        <a 
          href={telegramUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.inquireLinkMinimal}
        >
          <Typography variant="body-sm">Telegram</Typography>
        </a>
      </div>
    );
  }

  // Full variant for PDP
  return (
    <div className={styles.fullContainer}>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.inquireLinkFull}
      >
        <span className={styles.inquireText}>WhatsApp</span>
      </a>
      <a 
        href={telegramUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.inquireLinkFull}
      >
        <span className={styles.inquireText}>Telegram</span>
      </a>
    </div>
  );
}

import React from "react";
import { Typography } from "../ui/Typography";
import { generateWhatsAppUrl } from "../../lib/whatsapp";
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

  if (variant === "minimal") {
    return (
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.inquireLinkMinimal}
      >
        <Typography variant="body-sm">Inquire</Typography>
      </a>
    );
  }

  // Full variant for PDP
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.inquireLinkFull}
    >
      <span className={styles.inquireText}>Inquire on WhatsApp</span>
    </a>
  );
}

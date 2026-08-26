import React from "react";
import { generateWhatsAppUrl } from "../../lib/whatsapp";
import { Typography } from "../ui/Typography";
import styles from "./FloatingWhatsApp.module.css";

export function FloatingWhatsApp() {
  const whatsappUrl = generateWhatsAppUrl("contact");

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingAction}
      aria-label="Chat with Biruh Adorn on WhatsApp"
    >
      <div className={styles.iconContainer} aria-hidden="true">
        {/* Abstract/Minimal WhatsApp Icon representation */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </div>
      <span className={styles.label}>
        <Typography variant="body-sm" as="span">
          Inquire
        </Typography>
      </span>
    </a>
  );
}

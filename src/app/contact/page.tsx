import React from "react";
import { Metadata } from "next";
import { Container } from "../../components/ui/Grid";
import { Typography } from "../../components/ui/Typography";
import { LinkButton } from "../../components/ui/Button";
import { contactConfig } from "../../config/contact";
import { brandConfig } from "../../config/brand";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact | Biruh Adorn",
  description: "Get in touch with Biruh Adorn for inquiries, custom orders, and collaborations.",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <Container className={styles.container}>
        <Typography variant="reference" className={styles.label}>
          Get In Touch
        </Typography>
        <Typography variant="display-lg" as="h1" className={styles.title}>
          Contact Us
        </Typography>
        <div className={styles.divider} aria-hidden="true" />
        <Typography variant="body-lg" as="p" className={styles.body}>
          We would love to hear from you. Whether you have a question about our pieces, 
          custom orders, or anything else, our team is ready to help.
        </Typography>

        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <Typography variant="reference">WhatsApp</Typography>
            <a href={`https://wa.me/${contactConfig.whatsapp.replace("+", "")}`} target="_blank" rel="noopener noreferrer">
              <Typography variant="body">{contactConfig.phone}</Typography>
            </a>
          </div>
          <div className={styles.contactItem}>
            <Typography variant="reference">Email</Typography>
            <a href={`mailto:${contactConfig.email}`}>
              <Typography variant="body">{contactConfig.email}</Typography>
            </a>
          </div>
          <div className={styles.contactItem}>
            <Typography variant="reference">Locations</Typography>
            <Typography variant="body">{brandConfig.locations.join(" · ")}</Typography>
          </div>
        </div>

        <div className={styles.actions}>
          <LinkButton href={`https://wa.me/${contactConfig.whatsapp.replace("+", "")}`} variant="primary">
            Message on WhatsApp
          </LinkButton>
        </div>
      </Container>
    </div>
  );
}

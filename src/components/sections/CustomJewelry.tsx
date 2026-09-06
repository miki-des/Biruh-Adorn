import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { LinkButton } from "../ui/Button";
import { generateWhatsAppUrl } from "../../lib/whatsapp";
import { generateTelegramUrl } from "../../lib/telegram";
import styles from "./CustomJewelry.module.css";

export function CustomJewelry() {
  const whatsappUrl = generateWhatsAppUrl("custom");
  const telegramUrl = generateTelegramUrl("custom");

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Typography variant="display-lg" as="h2" className={styles.title}>
            Custom Jewelry
          </Typography>
          <div className={styles.divider} aria-hidden="true" />
          
          <Typography variant="body-lg" as="p" className={styles.body}>
            We work closely with clients to create one-of-a-kind pieces. Bring your inspiration, material preferences, and design details. We provide design mockups prior to production.
          </Typography>

          <Typography variant="caption" as="p" className={styles.note}>
            A 50% prepayment is required to begin custom orders.
          </Typography>

          <div className={styles.actions}>
            <LinkButton href="/custom" variant="primary">
              Create Something Personal
            </LinkButton>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryAction}>
              <Typography variant="reference">WhatsApp</Typography>
            </a>
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryAction}>
              <Typography variant="reference">Telegram</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

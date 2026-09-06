import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { LinkButton } from "../ui/Button";
import { generateWhatsAppUrl } from "../../lib/whatsapp";
import { generateTelegramUrl } from "../../lib/telegram";
import styles from "./FinalCTA.module.css";

export function FinalCTA() {
  const whatsappUrl = generateWhatsAppUrl("contact");
  const telegramUrl = generateTelegramUrl("contact");

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Typography variant="display-xl" as="h2" className={styles.statement}>
            Empowering Jewelry
          </Typography>
          
          <div className={styles.actions}>
            <LinkButton href="/jewelry" variant="primary">
              Explore Jewelry
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

import React from "react";
import { generateTelegramUrl } from "../../lib/telegram";
import { Typography } from "../ui/Typography";
import styles from "./FloatingTelegram.module.css";

export function FloatingTelegram() {
  const telegramUrl = generateTelegramUrl("contact");

  return (
    <a
      href={telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingAction}
      aria-label="Chat with Biruh Adorn on Telegram"
    >
      <div className={styles.iconContainer} aria-hidden="true">
        {/* Simple Telegram Paper Plane Icon */}
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
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </div>
      <span className={styles.label}>
        <Typography variant="body-sm" as="span">
          Telegram
        </Typography>
      </span>
    </a>
  );
}

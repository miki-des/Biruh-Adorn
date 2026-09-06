"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navigationConfig } from "../../config/navigation";
import { contactConfig } from "../../config/contact";
import { socialConfig } from "../../config/social";
import { brandConfig } from "../../config/brand";
import { Typography } from "../ui/Typography";
import { generateWhatsAppUrl } from "../../lib/whatsapp";
import { generateTelegramUrl } from "../../lib/telegram";
import styles from "./MobileMenu.module.css";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Scroll locking & Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
        triggerRef.current?.focus();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const whatsappUrl = generateWhatsAppUrl("contact");
  const telegramUrl = generateTelegramUrl("contact");

  return (
    <>
      <button
        ref={triggerRef}
        className={styles.trigger}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <Typography variant="body-sm" as="span">
          {isOpen ? "Close" : "Menu"}
        </Typography>
      </button>

      {/* Overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Main Navigation"
      >
        <div className={styles.content}>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navigationConfig.map((item, index) => (
                <li
                  key={item.href}
                  className={styles.navItem}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <Link href={item.href} onClick={closeMenu} className={styles.navLink}>
                    <Typography variant="display-lg" as="span">
                      {item.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.footer}>
            <div className={styles.footerSection}>
              <Typography variant="caption" className={styles.footerLabel}>
                Inquiries
              </Typography>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                <Typography variant="body">WhatsApp</Typography>
              </a>
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                <Typography variant="body">Telegram</Typography>
              </a>
              <a href={`mailto:${contactConfig.email}`} className={styles.footerLink}>
                <Typography variant="body">Email Us</Typography>
              </a>
            </div>

            <div className={styles.footerSection}>
              <Typography variant="caption" className={styles.footerLabel}>
                Social
              </Typography>
              <div className={styles.socialLinks}>
                {Object.values(socialConfig).map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                  >
                    <Typography variant="body">{social.label}</Typography>
                  </a>
                ))}
              </div>
            </div>
            
            <div className={styles.footerBrand}>
              <Typography variant="body-sm">{brandConfig.name}</Typography>
              <Typography variant="caption">{brandConfig.tagline}</Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Link from "next/link";
import { brandConfig } from "../../config/brand";
import { contactConfig } from "../../config/contact";
import { socialConfig } from "../../config/social";
import { navigationConfig } from "../../config/navigation";
import { Container, Grid } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { generateWhatsAppUrl } from "../../lib/whatsapp";
import styles from "./Footer.module.css";

export function Footer() {
  const whatsappUrl = generateWhatsAppUrl("contact");

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.statement}>
          <Typography variant="display-lg" as="h2">
            {brandConfig.name}
          </Typography>
          <Typography variant="h4" as="p" className={styles.tagline}>
            {brandConfig.tagline}
          </Typography>
        </div>

        <Grid className={styles.grid}>
          {/* Navigation */}
          <div className={styles.column}>
            <Typography variant="reference" className={styles.label}>
              Explore
            </Typography>
            <ul className={styles.list}>
              {navigationConfig.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Inquiries */}
          <div className={styles.column}>
            <Typography variant="reference" className={styles.label}>
              Inquiries
            </Typography>
            <ul className={styles.list}>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`tel:${contactConfig.phone}`} className={styles.link}>
                  Phone
                </a>
              </li>
              <li>
                <a href={`mailto:${contactConfig.email}`} className={styles.link}>
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className={styles.column}>
            <Typography variant="reference" className={styles.label}>
              Social
            </Typography>
            <ul className={styles.list}>
              {Object.values(socialConfig).map((social) => (
                <li key={social.label}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Grid>

        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <Typography variant="caption">
              &copy; {new Date().getFullYear()} {brandConfig.name}. All rights reserved.
            </Typography>
          </div>

          <div className={styles.agency}>
            <Typography variant="caption">developed by Ahun digital software agency</Typography>
            <img src="/Assets/bruih_pictures/logo/ahun-logo.png" alt="Ahun Logo" className={styles.agencyLogo} />
          </div>

          <div className={styles.bottomRight}>
            <Typography variant="caption">
              Locations: {brandConfig.locations.join(", ")}
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
}

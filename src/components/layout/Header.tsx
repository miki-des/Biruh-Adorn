import React from "react";
import Link from "next/link";
import { brandConfig } from "../../config/brand";
import { navigationConfig } from "../../config/navigation";
import { ScrollHeaderWrapper } from "./ScrollHeaderWrapper";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <ScrollHeaderWrapper>
        <Container className={styles.container}>
          <div className={styles.logoSlot}>
            <Link href="/" aria-label="Home">
              <img 
                src="/Assets/bruih_pictures/logo/IMG_9715.PNG" 
                alt={`${brandConfig.name} Logo`} 
                className={styles.logoImage} 
              />
            </Link>
          </div>
          
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <ul className={styles.navList}>
              {navigationConfig.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.navLink}>
                    <Typography variant="body-sm" as="span">
                      {item.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            {/* The MobileMenu acts as both the trigger and the overlay manager */}
            <MobileMenu />
          </div>
        </Container>
      </ScrollHeaderWrapper>
    </>
  );
}

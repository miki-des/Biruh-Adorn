"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

interface ScrollHeaderWrapperProps {
  children: React.ReactNode;
}

export function ScrollHeaderWrapper({ children }: ScrollHeaderWrapperProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = `${styles.header} ${scrolled ? styles.scrolled : ""}`;

  return <header className={headerClass}>{children}</header>;
}

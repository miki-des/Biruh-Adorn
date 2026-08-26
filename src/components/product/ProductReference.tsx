"use client";

import React, { useState } from "react";
import { Typography } from "../ui/Typography";
import styles from "./ProductReference.module.css";

interface ProductReferenceProps {
  reference: string;
}

export function ProductReference({ reference }: ProductReferenceProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(reference);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy reference", err);
    }
  };

  return (
    <button 
      onClick={handleCopy} 
      className={styles.referenceBtn}
      aria-label={`Copy reference number ${reference}`}
      title="Copy reference to clipboard"
    >
      <Typography variant="reference" className={styles.refText}>
        REF. {reference}
      </Typography>
      <span className={styles.iconWrapper} aria-hidden="true">
        {copied ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}>
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </span>
      {/* Screen reader only confirmation */}
      {copied && <span className="sr-only">Reference copied to clipboard</span>}
    </button>
  );
}

import React from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({ variant = "primary", children, className, ...props }: ButtonProps) {
  const rootClass = `${styles.button} ${styles[variant]} ${className || ""}`.trim();

  return (
    <button className={rootClass} {...props}>
      {children}
    </button>
  );
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function LinkButton({ variant = "primary", children, className, ...props }: LinkButtonProps) {
  const rootClass = `${styles.button} ${styles[variant]} ${className || ""}`.trim();

  return (
    <a className={rootClass} {...props}>
      {children}
    </a>
  );
}

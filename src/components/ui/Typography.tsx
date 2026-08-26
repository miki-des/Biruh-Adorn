import React from "react";
import styles from "./Typography.module.css";

type TypographyVariant =
  | "display-xl"
  | "display-lg"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-lg"
  | "body"
  | "body-sm"
  | "caption"
  | "reference"
  | "price";

interface TypographyProps {
  variant?: TypographyVariant;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export function Typography({
  variant = "body",
  as: Component,
  children,
  className,
}: TypographyProps) {
  // Determine default element if none provided
  const defaultElement = {
    "display-xl": "h1",
    "display-lg": "h1",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    "body-lg": "p",
    body: "p",
    "body-sm": "p",
    caption: "span",
    reference: "span",
    price: "span",
  }[variant] as React.ElementType;

  const Tag = Component || defaultElement;
  const rootClass = `${styles[variant]} ${className || ""}`.trim();

  return <Tag className={rootClass}>{children}</Tag>;
}

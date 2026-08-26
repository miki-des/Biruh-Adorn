import React from "react";
import styles from "./Grid.module.css";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Grid({ children, className, as: Component = "div" }: GridProps) {
  const rootClass = `${styles.grid} ${className || ""}`.trim();
  
  return <Component className={rootClass}>{children}</Component>;
}

export function Container({ children, className, as: Component = "div" }: GridProps) {
  const rootClass = `${styles.container} ${className || ""}`.trim();
  
  return <Component className={rootClass}>{children}</Component>;
}

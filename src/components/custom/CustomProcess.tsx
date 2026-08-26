import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import styles from "./CustomProcess.module.css";

export function CustomProcess() {
  const steps = [
    {
      num: "01",
      title: "Idea",
      desc: "Share your inspiration and desired direction.",
    },
    {
      num: "02",
      title: "Discovery",
      desc: "Materials, stones, sizing and design details are discussed.",
    },
    {
      num: "03",
      title: "Design",
      desc: "Biruh Adorn provides design drawings/mockups before production.",
    },
    {
      num: "04",
      title: "Creation",
      desc: "The approved concept moves into production and is shaped by hand.",
    },
    {
      num: "05",
      title: "Prepayment",
      desc: "Custom orders require a 50% prepayment to begin.",
    }
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Typography variant="h3" as="h2" className={styles.title}>
            The Process
          </Typography>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.step}>
              <div className={styles.stepHeader}>
                <Typography variant="reference" className={styles.num}>{step.num}</Typography>
                <Typography variant="h4" as="h3" className={styles.stepTitle}>{step.title}</Typography>
              </div>
              <Typography variant="body" className={styles.stepDesc}>
                {step.desc}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

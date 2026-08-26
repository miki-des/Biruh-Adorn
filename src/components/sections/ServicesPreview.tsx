import React from "react";
import Link from "next/link";
import { Container, Grid } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import styles from "./ServicesPreview.module.css";

export function ServicesPreview() {
  const services = [
    { title: "Custom Jewelry", desc: "Collaborate on bespoke designs." },
    { title: "Repair", desc: "Restoring pieces to their original state." },
    { title: "Cleaning", desc: "Professional polishing and care." },
    { title: "Maintenance", desc: "Structural checks and refinements." },
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Typography variant="h3" as="h2" className={styles.title}>
            Care & Services
          </Typography>
          <Typography variant="body" className={styles.subtitle}>
            Jewelry is designed to be worn, cared for, and lived with.
          </Typography>
        </div>

        <Grid className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <Typography variant="reference" className={styles.serviceTitle}>
                {service.title}
              </Typography>
              <Typography variant="body-sm" className={styles.serviceDesc}>
                {service.desc}
              </Typography>
            </div>
          ))}
        </Grid>

        <div className={styles.action}>
          <Link href="/contact" className={styles.link}>
            <Typography variant="reference">View All Services</Typography>
          </Link>
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { getTestimonials } from "../../data/testimonials";
import styles from "./TestimonialsPreview.module.css";

interface TestimonialsPreviewProps {
  debug?: boolean;
}

export async function TestimonialsPreview({ debug = false }: TestimonialsPreviewProps) {
  const testimonials = await getTestimonials(debug);
  const featured = testimonials.filter(t => t.featured).slice(0, 3);

  // Elegant Editorial Fallback (No empty carousel logic)
  if (featured.length === 0) {
    return (
      <section className={styles.section}>
        <Container className={styles.container}>
          <div className={styles.content}>
            <Typography variant="display-lg" as="h2" className={styles.title}>
              Designed Through Conversation
            </Typography>
            <div className={styles.divider} aria-hidden="true" />
            <Typography variant="body-lg" className={styles.description}>
              Every custom commission begins as a dialogue. The final piece is a collaboration between the wearer's intent and our structural material language.
            </Typography>
          </div>
        </Container>
      </section>
    );
  }

  // Active Testimonials State
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Typography variant="display-lg" as="h2" className={styles.title}>
            Client Perspectives
          </Typography>
          <div className={styles.divider} aria-hidden="true" />
        </div>
        
        <div className={styles.grid}>
          {featured.map((t) => (
            <div key={t.id} className={styles.testimonial}>
              <Typography variant="body-lg" className={styles.quote}>
                "{t.quote}"
              </Typography>
              <div className={styles.authorGroup}>
                <Typography variant="h4" className={styles.author}>
                  {t.authorName}
                </Typography>
                {t.authorContext && (
                  <Typography variant="reference" className={styles.context}>
                    {t.authorContext}
                  </Typography>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

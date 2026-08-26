import React from "react";
import { Container } from "../ui/Grid";
import { Typography } from "../ui/Typography";
import { getPressMentions } from "../../data/press";
import styles from "./PressMentions.module.css";

interface PressMentionsProps {
  debug?: boolean;
}

export async function PressMentions({ debug = false }: PressMentionsProps) {
  const mentions = await getPressMentions(debug);

  if (mentions.length === 0) {
    // Empty state gracefully falls back to empty (or we can just render null for Press)
    // For luxury brands, not having press is fine, we just don't show the section.
    return null;
  }

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Typography variant="reference" className={styles.eyebrow}>
            Recognition
          </Typography>
        </div>
        
        <div className={styles.list}>
          {mentions.map((mention) => (
            <div key={mention.id} className={styles.mention}>
              <div className={styles.publicationWrapper}>
                <Typography variant="reference" className={styles.publication}>
                  {mention.publication}
                </Typography>
              </div>
              <div className={styles.content}>
                <Typography variant="h3" as="h3" className={styles.headline}>
                  {mention.headline}
                </Typography>
                <Typography variant="body" className={styles.excerpt}>
                  {mention.excerpt}
                </Typography>
                {mention.url && (
                  <a href={mention.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Read Article
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

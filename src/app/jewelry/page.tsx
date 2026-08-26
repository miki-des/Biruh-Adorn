import React from "react";
import { Metadata } from "next";
import { Container } from "../../components/ui/Grid";
import { Typography } from "../../components/ui/Typography";
import { GalleryClient } from "../../components/filters/GalleryClient";
import { getProducts, getCategories, getCollections } from "../../data/products";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Gallery | Biruh Adorn",
  description: "Explore contemporary handmade jewelry by Biruh Adorn. Pieces shaped by hand, designed for individual expression.",
};

export default async function JewelryGallery() {
  const products = await getProducts();
  const categories = await getCategories();
  const collections = await getCollections();

  return (
    <div className={styles.page}>
      <Container className={styles.header}>
        <Typography variant="display-lg" as="h1" className={styles.title}>
          Gallery
        </Typography>
        <Typography variant="body-lg" className={styles.description}>
          Pieces shaped by hand, designed for individual expression.
        </Typography>
      </Container>
      
      <GalleryClient 
        initialProducts={products} 
        categories={categories} 
        collections={collections} 
      />
    </div>
  );
}

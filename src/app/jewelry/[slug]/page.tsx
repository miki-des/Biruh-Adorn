import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "../../../components/ui/Grid";
import { Typography } from "../../../components/ui/Typography";
import { getProductBySlug, getProducts } from "../../../data/products";
import { ProductGallery } from "../../../components/product/ProductGallery";
import { ProductReference } from "../../../components/product/ProductReference";
import { ProductInquiry } from "../../../components/product/ProductInquiry";
import { RelatedProducts } from "../../../components/product/RelatedProducts";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const p = await params;
  const s = await searchParams;
  const isDebug = s.debug === "true";
  
  const product = await getProductBySlug(p.slug, isDebug);
  
  if (!product) {
    return { title: "Product Not Found | Biruh Adorn" };
  }
  
  return {
    title: `${product.name} | Biruh Adorn`,
    description: product.description.substring(0, 160),
    // Prevent dev fixtures from being indexed
    robots: isDebug ? "noindex, nofollow" : "index, follow", 
  };
}

export default async function ProductPage({ params, searchParams }: PageProps) {
  const p = await params;
  const s = await searchParams;
  const isDebug = s.debug === "true";

  const product = await getProductBySlug(p.slug, isDebug);
  
  if (!product) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: product.currency,
    maximumFractionDigits: 0,
  }).format(product.price);

  const allProducts = await getProducts(isDebug);

  return (
    <div className={styles.page}>
      <Container className={styles.productLayout}>
        <div className={styles.galleryColumn}>
          <ProductGallery images={product.images} productName={product.name} />
        </div>
        
        <div className={styles.infoColumn}>
          <div className={styles.header}>
            <Typography variant="display-lg" as="h1" className={styles.name}>
              {product.name}
            </Typography>
            <ProductReference reference={product.reference} />
            <Typography variant="price" className={styles.price}>
              {formattedPrice}
            </Typography>
          </div>

          <div className={styles.descriptionRow}>
            <Typography variant="body" className={styles.description}>
              {product.description}
            </Typography>
          </div>

          <div className={styles.detailsRow}>
            {product.materials && product.materials.length > 0 && (
              <div className={styles.detailBlock}>
                <Typography variant="reference">Materials</Typography>
                <Typography variant="body-sm">{product.materials.join(", ")}</Typography>
              </div>
            )}
            
            {product.colors && product.colors.length > 0 && (
              <div className={styles.detailBlock}>
                <Typography variant="reference">Finish</Typography>
                <Typography variant="body-sm">{product.colors.join(", ")}</Typography>
              </div>
            )}

            <div className={styles.detailBlock}>
              <Typography variant="reference">Availability</Typography>
              <Typography variant="body-sm">{product.availability}</Typography>
            </div>
          </div>

          <div className={styles.actionRow}>
            <ProductInquiry product={product} variant="full" />
          </div>
        </div>
      </Container>

      <Container>
        <RelatedProducts products={allProducts} currentProductId={product.id} />
      </Container>
    </div>
  );
}

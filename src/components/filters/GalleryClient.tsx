"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Product } from "../../data/products";
import { ProductModal } from "../product/ProductModal";
import { Typography } from "../ui/Typography";
import { Container } from "../ui/Grid";
import styles from "./GalleryClient.module.css";

interface GalleryClientProps {
  initialProducts: Product[];
  categories: string[];
  collections: string[];
}

export function GalleryClient({ initialProducts, categories, collections }: GalleryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeCollection, setActiveCollection] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return initialProducts.filter(product => {
      if (activeCategory && product.category !== activeCategory) return false;
      if (activeCollection && product.collection !== activeCollection) return false;

      if (searchQuery) {
        const query = searchQuery.toLowerCase().trim();
        const normalizedRef = product.reference.toLowerCase().replace(/[^a-z0-9]/g, "");
        const normalizedQuery = query.replace(/[^a-z0-9]/g, "");

        const matchName = product.name.toLowerCase().includes(query);
        const matchRef = normalizedRef.includes(normalizedQuery);
        const matchCollection = product.collection?.toLowerCase().includes(query);
        const matchCategory = product.category.toLowerCase().includes(query);

        if (!matchName && !matchRef && !matchCollection && !matchCategory) return false;
      }

      return true;
    });
  }, [initialProducts, searchQuery, activeCategory, activeCollection]);

  // EMPTY CATALOGUE STATE
  if (initialProducts.length === 0) {
    return (
      <Container className={styles.emptyCatalogue}>
        <div className={styles.emptyContent}>
          <Typography variant="display-lg" as="h1" className={styles.emptyTitle}>
            The Gallery
          </Typography>
          <div className={styles.divider} aria-hidden="true" />
          <Typography variant="body-lg" className={styles.emptyText}>
            Our upcoming collection is currently in production. <br/>
            Check back soon for new contemporary pieces.
          </Typography>
        </div>
      </Container>
    );
  }

  return (
    <>
      <Container className={styles.galleryWrapper}>
        {/* Filters & Search */}
        <div className={styles.controls}>


          <div className={styles.filterGroup}>
            {/* Category filters */}
            {categories.length > 0 && (
              <div className={styles.filterRow}>
                <button
                  className={`${styles.filterBtn} ${activeCategory === null ? styles.active : ""}`}
                  onClick={() => setActiveCategory(null)}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Collection filters */}
            {collections.length > 0 && (
              <div className={styles.filterRow}>
                <button
                  className={`${styles.filterBtn} ${activeCollection === null ? styles.active : ""}`}
                  onClick={() => setActiveCollection(null)}
                >
                  All Collections
                </button>
                {collections.map(col => (
                  <button
                    key={col}
                    className={`${styles.filterBtn} ${activeCollection === col ? styles.active : ""}`}
                    onClick={() => setActiveCollection(col)}
                  >
                    {col}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className={styles.resultsCount}>
          <Typography variant="reference">
            {filteredProducts.length} {filteredProducts.length === 1 ? "Piece" : "Pieces"}
          </Typography>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className={styles.grid}>
            {filteredProducts.map((product) => {
              const primaryImage = product.images.length > 0 ? product.images[0] : null;
              const formattedPrice = new Intl.NumberFormat("en-ET", {
                style: "currency",
                currency: product.currency,
                maximumFractionDigits: 0,
              }).format(product.price);

              return (
                <button
                  key={product.id}
                  className={styles.card}
                  onClick={() => setSelectedProduct(product)}
                  aria-label={`View ${product.name}`}
                >
                  <div className={styles.cardImage}>
                    {primaryImage ? (
                      <Image
                        src={primaryImage}
                        alt={product.name}
                        fill
                        sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                        className={styles.image}
                      />
                    ) : (
                      <div className={styles.cardPlaceholder}>
                        <span>No Image</span>
                      </div>
                    )}
                    <div className={styles.cardOverlay}>
                      <span className={styles.viewLabel}>View Details</span>
                    </div>
                  </div>
                  <div className={styles.cardInfo}>
                    <span className={styles.cardName}>{product.name}</span>
                    <span className={styles.cardPrice}>{formattedPrice}</span>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className={styles.noResults}>
            <Typography variant="h4" as="p">No pieces found.</Typography>
            <Typography variant="body" className={styles.noResultsText}>
              Try adjusting your search or filter criteria.
            </Typography>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory(null); setActiveCollection(null); }}
              className={styles.resetBtn}
            >
              <Typography variant="reference">Clear Filters</Typography>
            </button>
          </div>
        )}
      </Container>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

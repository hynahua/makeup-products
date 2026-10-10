"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { products, type Product, type ProductCategory } from "@/data/products";
import { useCart } from "./cart-context";

type ProductFilter = "all" | ProductCategory;

function ProductCarousel({ product }: Readonly<{ product: Product }>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [saved, setSaved] = useState(false);
  const { addToBag } = useCart();
  const slideCount = product.images.length;
  const activeImage = product.images[activeIndex];

  const show = (nextIndex: number) => {
    setActiveIndex((nextIndex + slideCount) % slideCount);
  };

  return (
    <div
      className="product-visual carousel"
      aria-label={`${product.brand} ${product.name} product gallery`}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          show(activeIndex - 1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          show(activeIndex + 1);
        }
      }}
    >
      <span className="badge">{product.badge}</span>
      <button
        className={`heart${saved ? " saved" : ""}`}
        aria-label={`${saved ? "Remove" : "Save"} ${product.brand} ${product.name}`}
        aria-pressed={saved}
        onClick={(event) => {
          event.stopPropagation();
          setSaved((isSaved) => !isSaved);
        }}
      >
        {saved ? "♥" : "♡"}
      </button>
      <div className="carousel-track">
        <figure className="carousel-slide active" key={activeImage.src}>
          <Image src={activeImage.src} alt={activeImage.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" />
          <figcaption>{activeImage.label}</figcaption>
        </figure>
      </div>
      <button className="carousel-arrow prev" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); show(activeIndex - 1); }}>←</button>
      <button className="carousel-arrow next" aria-label="Next image" onClick={(event) => { event.stopPropagation(); show(activeIndex + 1); }}>→</button>
      <div className="carousel-dots" aria-label="Choose image">
        {product.images.map((image, index) => (
          <button
            className={index === activeIndex ? "active" : ""}
            aria-label={`Show ${image.label.toLowerCase()}`}
            aria-current={index === activeIndex ? "true" : undefined}
            key={image.src}
            onClick={(event) => { event.stopPropagation(); show(index); }}
          />
        ))}
      </div>
      <button className="quick-add" onClick={(event) => { event.stopPropagation(); addToBag(); }}>Quick add</button>
    </div>
  );
}

function ProductCard({ product, onOpen }: Readonly<{ product: Product; onOpen: (product: Product) => void }>) {
  return (
    <article
      id={product.id === "chanel-hydra-gloss" ? "product-chanel-gloss" : product.id === "givenchy-prisme-libre" ? "product-givenchy-primer" : product.id === "lancome-juicy-tubes-cheeks" ? "product-lancome-cheeks" : undefined}
      className="product-card"
      onClick={() => onOpen(product)}
      onKeyDown={(event) => {
        if ((event.key === "Enter" || event.key === " ") && event.target === event.currentTarget) {
          event.preventDefault();
          onOpen(product);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${product.brand} ${product.name}`}
    >
      <ProductCarousel product={product} />
      <div className="product-info">
        <div>
          <p className="product-brand">{product.brand}</p>
          <h3>{product.name}</h3>
          <p>{product.detail}</p>
        </div>
        <strong>{product.price}</strong>
      </div>
    </article>
  );
}

function ProductModal({ product, onClose }: Readonly<{ product: Product; onClose: () => void }>) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { addToBag } = useCart();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button ref={closeButtonRef} className="modal-close" aria-label="Close" onClick={onClose}>×</button>
        <div className="modal-swatch" style={{ background: product.colour }}>
          <Image className="modal-product-image" src={product.images[1].src} alt={`${product.brand} ${product.name}`} fill sizes="(max-width: 560px) 90vw, 390px" />
        </div>
        <div>
          <p className="eyebrow">Your selected essential</p>
          <h2 id="modal-title">{product.name}</h2>
          <p className="modal-description">{product.description}</p>
          <strong className="modal-price">{product.price}</strong>
          <button className="button button-dark add-to-bag" onClick={() => { addToBag(); onClose(); }}>Add to bag</button>
        </div>
      </div>
      <div className="overlay" onClick={onClose} aria-hidden="true" />
    </>
  );
}

export function ProductCollection() {
  const [filter, setFilter] = useState<ProductFilter>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const openProduct = (product: Product) => {
    openerRef.current = document.activeElement as HTMLElement | null;
    setSelectedProduct(product);
  };

  const closeProduct = useCallback(() => {
    setSelectedProduct(null);
    requestAnimationFrame(() => openerRef.current?.focus());
  }, []);

  const filters: Array<{ value: ProductFilter; label: string }> = [
    { value: "all", label: "All" },
    { value: "face", label: "Face" },
    { value: "lips", label: "Lips" },
  ];
  const visibleProducts = filter === "all" ? products : products.filter((product) => product.category === filter);

  return (
    <section className="shop-section" id="shop" aria-labelledby="shop-title">
      <div className="section-heading">
        <div><p className="eyebrow">The latest arrivals</p><h2 id="shop-title">The new luxury edit</h2></div>
        <p>Six new-season essentials from the maisons defining modern luxury beauty.</p>
      </div>
      <div className="filters" role="group" aria-label="Filter products">
        {filters.map((item) => (
          <button
            className={`filter${filter === item.value ? " active" : ""}`}
            data-filter={item.value}
            key={item.value}
            aria-pressed={filter === item.value}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {visibleProducts.map((product) => <ProductCard product={product} onOpen={openProduct} key={product.id} />)}
      </div>
      {selectedProduct && <ProductModal product={selectedProduct} onClose={closeProduct} />}
    </section>
  );
}

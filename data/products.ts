import { assetPath } from "@/lib/asset-path";

export type ProductCategory = "face" | "lips";

export interface ProductImage {
  src: string;
  alt: string;
  label: string;
}

export interface Product {
  id: string;
  category: ProductCategory;
  brand: string;
  name: string;
  detail: string;
  badge: string;
  price: string;
  description: string;
  colour: string;
  images: ProductImage[];
}

const image = (brand: string, index: number, alt: string, label: string): ProductImage => ({
  src: `/assets/products/chinese-edit/${brand}-${index}.webp`,
  alt,
  label,
});

const productData: Product[] = [
  {
    id: "flower-knows-snow-ballet-blush",
    category: "face",
    brand: "FLOWER KNOWS",
    name: "Snow Ballet Air Blush",
    detail: "5 shades · Weightless powder",
    badge: "New",
    price: "A$26.00",
    description:
      "An ultra-fine, buildable powder blush with a soft-focus finish and a collectible snow-globe inspired compact.",
    colour: "#d9e5f3",
    images: [
      image("flower", 1, "Flower Knows Snow Ballet Air Blush compacts", "The compact"),
      image("flower", 2, "Flower Knows Snow Ballet Air Blush in a winter display", "Snow Ballet world"),
      image("flower", 3, "Flower Knows Snow Ballet Air Blush swatches on multiple skin tones", "Shade range"),
    ],
  },
  {
    id: "flortte-lip-gloss-serum",
    category: "lips",
    brand: "FLORTTE",
    name: "I Am Super Beauty Lip Gloss Serum",
    detail: "7 juicy shades · 2.6 g",
    badge: "15% off",
    price: "A$10.99",
    description:
      "A translucent, moisturising gloss serum with a curved applicator designed to smooth the look of lip lines.",
    colour: "#f2b8c2",
    images: [
      image("flortte", 2, "FLORTTE I Am Super Beauty Lip Gloss Serum tubes and swatches", "Formula and finish"),
      image("flortte", 1, "FLORTTE I Am Super Beauty Lip Gloss Serum in Orange Soda", "On lips"),
      image("flortte", 3, "FLORTTE I Am Super Beauty Lip Gloss Serum shade collection", "Shade range"),
    ],
  },
  {
    id: "joocyee-aura-blush-highlighter",
    category: "face",
    brand: "JOOCYEE",
    name: "AURA Glazed Blush & Highlighter",
    detail: "10 luminous shades · 5 g",
    badge: "Best seller",
    price: "A$16.90",
    description:
      "A silky baked blush and highlighter collection that creates a smooth, dimensional glow with comfortable wear.",
    colour: "#d9c8df",
    images: [
      image("joocyee", 3, "JOOCYEE AURA Glazed Blush and Highlighter compacts", "The compacts"),
      image("joocyee", 1, "JOOCYEE AURA blush swatches in coral, iris and pink", "Blush swatches"),
      image("joocyee", 2, "JOOCYEE AURA highlighter swatches in cool luminous shades", "Glow swatches"),
    ],
  },
  {
    id: "judydoll-pdrn-stay-shine",
    category: "lips",
    brand: "JUDYDOLL",
    name: "PDRN Stay Shine Lipstick",
    detail: "9 soft-tint shades · 3 g",
    badge: "Best seller",
    price: "A$15.99",
    description:
      "A glossy soft-tint lipstick with a hydrating feel, gemstone-inspired shades and a flexible colour-locking film.",
    colour: "#db8894",
    images: [
      image("judydoll", 1, "Judydoll PDRN Stay Shine Lipstick and glossy colour swatch", "The lipstick"),
      image("judydoll", 2, "Model wearing Judydoll PDRN Stay Shine Lipstick", "On lips"),
      image("judydoll", 3, "Judydoll PDRN Stay Shine Lipstick glossy finish close-up", "Gloss finish"),
    ],
  },
  {
    id: "into-you-water-coating-tint",
    category: "lips",
    brand: "INTO YOU",
    name: "Water Coating Lip Tint",
    detail: "6 water-shine shades · 2.6 g",
    badge: "New",
    price: "A$12.99",
    description:
      "A lightweight water-gloss tint with camellia extract, a drop-shaped applicator and a fresh satin-like shine.",
    colour: "#f5c1c8",
    images: [
      image("intoyou", 2, "INTO YOU Water Coating Lip Tint tube and applicator", "The applicator"),
      image("intoyou", 1, "INTO YOU Water Coating Lip Tint in CT01 Lilac Veil", "Lilac Veil"),
      image("intoyou", 3, "Model holding INTO YOU Water Coating Lip Tint", "Campaign look"),
    ],
  },
  {
    id: "red-chamber-haruki-cream",
    category: "face",
    brand: "RED CHAMBER",
    name: "HARUKI Multi-Purpose Cream",
    detail: "Eyes, cheeks and lips · 1.5–2 g",
    badge: "Icon",
    price: "A$19.99",
    description:
      "A smooth, luminous 3-in-1 cream for eyes, cheeks and lips with a blendable texture and healthy-looking glow.",
    colour: "#c88476",
    images: [
      image("redchamber", 1, "RED CHAMBER HARUKI Multi-Purpose Cream compact", "The compact"),
      image("redchamber", 2, "Model wearing RED CHAMBER HARUKI Multi-Purpose Cream", "On cheeks"),
      image("redchamber", 3, "RED CHAMBER HARUKI Multi-Purpose Cream shades and swatches", "Shade range"),
    ],
  },
];

export const products: Product[] = productData.map((product) => ({
  ...product,
  images: product.images.map((productImage) => ({
    ...productImage,
    src: assetPath(productImage.src),
  })),
}));

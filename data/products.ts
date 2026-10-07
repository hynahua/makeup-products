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

const productData: Product[] = [
  {
    id: "chanel-hydra-gloss",
    category: "lips",
    brand: "CHANEL",
    name: "Rouge Coco Hydra Gloss",
    detail: "438 Charms · New collection",
    badge: "New",
    price: "A$65",
    description:
      "A hydrating, smoothing high-shine gloss from the new Coco Mademoiselle makeup collection.",
    colour: "#d98f9b",
    images: [
      { src: "/assets/products/latest/chanel-hydra-gloss-box.png", alt: "Chanel Rouge Coco Hydra Gloss with outer box", label: "Outer box" },
      { src: "/assets/products/latest/chanel-hydra-gloss-open.png", alt: "Chanel Rouge Coco Hydra Gloss with applicator", label: "Inside" },
      { src: "/assets/products/latest/chanel-hydra-gloss-shades.png", alt: "Chanel Rouge Coco Hydra Gloss shade swatches", label: "Shade range" },
    ],
  },
  {
    id: "ysl-lovenude-kiss-shaper",
    category: "lips",
    brand: "YSL",
    name: "Lovenude Kiss Shaper",
    detail: "11 sculpting nude shades",
    badge: "New",
    price: "A$52",
    description:
      "A creamy multi-use nude liner that shapes, sculpts, blurs and smudges in one glide.",
    colour: "#a96f5d",
    images: [
      { src: "/assets/products/latest/ysl-lovenude-box.png", alt: "YSL Lovenude Kiss Shaper with outer box", label: "Outer box" },
      { src: "/assets/products/latest/ysl-lovenude-open.png", alt: "YSL Lovenude Kiss Shaper opened to show the liner tip", label: "Inside" },
      { src: "/assets/products/latest/ysl-lovenude-shades.png", alt: "YSL Lovenude Kiss Shaper nude shade swatches", label: "Shade range" },
    ],
  },
  {
    id: "dior-addict-glass",
    category: "lips",
    brand: "DIOR",
    name: "Addict Glass Lipstick",
    detail: "16 ultra-shine shades",
    badge: "Fall 2026",
    price: "A$72",
    description:
      "Dior's first gloss stick, combining ultra-shine colour with a hydrating melting texture.",
    colour: "#8e405b",
    images: [
      { src: "/assets/products/latest/dior-glass-box.png", alt: "Dior Addict Glass Lipstick with outer box", label: "Outer box" },
      { src: "/assets/products/latest/dior-glass-open.png", alt: "Dior Addict Glass Lipstick opened to show the gloss bullet", label: "Inside" },
      { src: "/assets/products/latest/dior-glass-shades.png", alt: "Dior Addict Glass Lipstick shade swatches", label: "Shade range" },
    ],
  },
  {
    id: "guerlain-meteorites",
    category: "face",
    brand: "GUERLAIN",
    name: "Météorites Compact",
    detail: "4 correcting harmonies",
    badge: "New",
    price: "A$115",
    description:
      "A new mattifying and setting pressed powder with a multidimensional soft-matte finish.",
    colour: "#eadbd4",
    images: [
      { src: "/assets/products/latest/guerlain-meteorites-box.png", alt: "Guerlain Météorites Compact with outer box", label: "Outer box" },
      { src: "/assets/products/latest/guerlain-meteorites-open.png", alt: "Guerlain Météorites Compact opened to show pressed powder and mirror", label: "Inside" },
      { src: "/assets/products/latest/guerlain-meteorites-shades.png", alt: "Guerlain Météorites Compact powder shades", label: "Shade range" },
    ],
  },
  {
    id: "givenchy-prisme-libre",
    category: "face",
    brand: "GIVENCHY",
    name: "Prisme Libre Serum Primer",
    detail: "3 corrective shades",
    badge: "New",
    price: "A$92",
    description:
      "A serum-infused primer that blurs, hydrates and colour-corrects in three targeted shades.",
    colour: "#c6d4b4",
    images: [
      { src: "/assets/products/latest/givenchy-primer-box.png", alt: "Givenchy Prisme Libre Serum Primer with outer box", label: "Outer box" },
      { src: "/assets/products/latest/givenchy-primer-open.png", alt: "Givenchy Prisme Libre Serum Primer opened with pump", label: "Inside" },
      { src: "/assets/products/latest/givenchy-primer-shades.png", alt: "Givenchy Prisme Libre Serum Primer corrective shades", label: "Shade range" },
    ],
  },
  {
    id: "lancome-juicy-tubes-cheeks",
    category: "face",
    brand: "LANCÔME",
    name: "Skin Idôle Juicy Tubes Cheeks",
    detail: "3 luminous shades",
    badge: "New",
    price: "A$39",
    description:
      "A buildable tint-and-glow cheek highlighter with a juicy, luminous finish.",
    colour: "#d98c97",
    images: [
      { src: "/assets/products/latest/lancome-cheeks-box.png", alt: "Lancôme Skin Idôle Juicy Tubes Cheeks with outer box", label: "Outer box" },
      { src: "/assets/products/latest/lancome-cheeks-open.png", alt: "Lancôme Skin Idôle Juicy Tubes Cheeks opened with applicator", label: "Inside" },
      { src: "/assets/products/latest/lancome-cheeks-shades.png", alt: "Lancôme Skin Idôle Juicy Tubes Cheeks shades", label: "Shade range" },
    ],
  },
];

export const products: Product[] = productData.map((product) => ({
  ...product,
  images: product.images.map((image) => ({
    ...image,
    src: assetPath(image.src),
  })),
}));

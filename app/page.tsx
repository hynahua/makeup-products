import Image from "next/image";
import { CartProvider } from "@/components/cart-context";
import { Header } from "@/components/header";
import { Newsletter } from "@/components/newsletter";
import { ProductCollection } from "@/components/product-collection";
import { ShadeFinder } from "@/components/shade-finder";
import { assetPath } from "@/lib/asset-path";

export default function Home() {
  return (
    <CartProvider>
      <Header />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">The C-beauty edit · Australia</p>
            <h1 id="hero-title">China’s new<br/><em>beauty wave.</em></h1>
            <p className="hero-text">Six expressive Chinese makeup brands, curated in English for Australian beauty lovers. Discover playful packaging, modern textures and colour-first formulas.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#shop">Shop the collection <span>↗</span></a>
              <ShadeFinder />
            </div>
          </div>
          <div className="hero-art">
            <Image src={assetPath("/assets/products/hero-chinese-beauty-edit.webp")} alt="Beauty products from Flower Knows, FLORTTE, JOOCYEE, Judydoll, INTO YOU and RED CHAMBER" fill preload sizes="(max-width: 900px) 100vw, 52vw" />
            <div className="hero-note">01 — 06<br/><span>CHINESE BEAUTY · AU</span></div>
          </div>
          <a className="scroll-cue" href="#shop">Scroll to discover <span>↓</span></a>
        </section>

        <section className="marquee" aria-label="Brand values">
          <div>FLOWER KNOWS <span>✦</span> FLORTTE <span>✦</span> JOOCYEE <span>✦</span> JUDYDOLL <span>✦</span> INTO YOU <span>✦</span> RED CHAMBER <span>✦</span></div>
        </section>

        <ProductCollection />

        <section className="campaign-edit" id="new" aria-labelledby="campaign-title">
          <header className="campaign-heading">
            <div><p className="eyebrow">Real looks · New arrivals</p><h2 id="campaign-title">Wear what’s <em>new.</em></h2></div>
            <p>Three effortless looks, paired with this season’s most-wanted beauty.</p>
          </header>
          <div className="campaign-grid">
            <article className="campaign-card campaign-rose">
              <Image src={assetPath("/assets/campaign/veloura-user-lip-look.webp")} alt="Model in a white knit top with a side ponytail holding a pink lip tint" fill sizes="(max-width: 720px) 100vw, 33vw" />
              <div className="campaign-copy">
                <p className="campaign-number">Look 01 · Lips</p>
                <h3>Soft-tint shine</h3>
                <p>JUDYDOLL PDRN Stay Shine Lipstick</p>
                <span>Gemstone colour with a glossy finish.</span>
                <a href="#product-judydoll-pdrn-stay-shine">Shop the lipstick <b>↗</b></a>
              </div>
            </article>
            <article className="campaign-card campaign-mint">
              <Image src={assetPath("/assets/campaign/veloura-user-rococo-blush-look-v2.webp")} alt="Model in a black long-sleeve top beside an ornate pink Flower Knows blush compact" fill sizes="(max-width: 720px) 100vw, 33vw" />
              <div className="campaign-copy">
                <p className="campaign-number">Look 02 · Cheeks</p>
                <h3>Petal-soft flush</h3>
                <p>FLOWER KNOWS Strawberry Rococo Embossed Blush</p>
                <span>Buildable petal-pink colour with an airbrushed finish.</span>
                <a href="https://flowerknows.co/products/strawberry-rococo-embossed-blush-usa" target="_blank" rel="noreferrer">Shop the blush <b>↗</b></a>
              </div>
            </article>
            <article className="campaign-card campaign-gold">
              <Image src={assetPath("/assets/campaign/veloura-user-eyeshadow-look-v2.webp")} alt="Model in a teal top beside an ornate nine-colour neutral eyeshadow palette" fill sizes="(max-width: 720px) 100vw, 33vw" />
              <div className="campaign-copy">
                <p className="campaign-number">Look 03 · Eyes</p>
                <h3>Soft-focus definition</h3>
                <p>FLOWER KNOWS Little Angel 9-Color Palette</p>
                <span>Nine celestial neutrals in matte and shimmer finishes.</span>
                <a href="https://flowerknows.co/products/little-angel-9-color-eyeshadow-palette-1" target="_blank" rel="noreferrer">Shop the palette <b>↗</b></a>
              </div>
            </article>
          </div>
        </section>

        <section className="routine" id="routine" aria-labelledby="routine-title">
          <div className="routine-intro"><p className="eyebrow">Three steps. Five minutes.</p><h2 id="routine-title">The everyday<br/><em>edit.</em></h2></div>
          <ol className="steps">
            <li><span>01</span><div><h3>Build the flush</h3><p>Sweep on Flower Knows Snow Ballet Air Blush in light, buildable layers.</p></div><b>2 min</b></li>
            <li><span>02</span><div><h3>Add glazed light</h3><p>Tap JOOCYEE AURA onto the high points of the cheeks for a dimensional glow.</p></div><b>1 min</b></li>
            <li><span>03</span><div><h3>Finish with shine</h3><p>Choose FLORTTE, Judydoll or INTO YOU for a glossy colour finish.</p></div><b>2 min</b></li>
          </ol>
        </section>

        <section className="store-location" id="australia" aria-labelledby="location-title">
          <div className="location-map">
            <Image src={assetPath("/assets/products/hero-chinese-beauty-edit.webp")} alt="Six-brand Chinese beauty edit curated for Australia" fill sizes="(max-width: 900px) 100vw, 68vw" />
            <span className="map-edition">English storefront · AUD pricing</span>
          </div>
          <div className="location-copy">
            <p className="eyebrow">Curated for Australia</p>
            <h2 id="location-title">From China’s studios<br/><em>to your beauty bag.</em></h2>
            <p className="location-intro">Explore six Chinese beauty names through clear English product stories and easy-to-read Australian pricing.</p>
            <p className="price-note"><span>Good to know</span> Prices are indicative and based on official listings reviewed in October 2026. Final checkout pricing and availability may vary.</p>
            <a className="button button-dark directions-link" href="#shop">Explore the edit <span>↗</span></a>
          </div>
        </section>

        <Newsletter />
      </main>

      <footer>
        <a className="brand" href="#top">VELOURA</a>
        <p>Makeup for every version of you.</p>
        <div><a href="#">Instagram</a><a href="#">TikTok</a><a href="#australia">Australia edit</a></div>
        <small>© 2026 Veloura Beauty · Chinese beauty curated for Australia</small>
      </footer>
    </CartProvider>
  );
}

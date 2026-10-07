import Image from "next/image";
import { CartProvider } from "@/components/cart-context";
import { Header } from "@/components/header";
import { Newsletter } from "@/components/newsletter";
import { ProductCollection } from "@/components/product-collection";
import { ShadeFinder } from "@/components/shade-finder";

export default function Home() {
  return (
    <CartProvider>
      <Header />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">The colour edit · 2026</p>
            <h1 id="hero-title">Makeup,<br/><em>made personal.</em></h1>
            <p className="hero-text">High-impact colour meets comfortable, skin-loving formulas. Created for real routines, every mood, and every version of you.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#shop">Shop the collection <span>↗</span></a>
              <ShadeFinder />
            </div>
          </div>
          <div className="hero-art">
            <Image src="/assets/products/hero-luxury-edit-v2.png" alt="Six new-season luxury makeup products from Chanel, YSL, Dior, Guerlain, Givenchy and Lancôme" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
            <div className="hero-note">01 — 06<br/><span>THE NEW EDIT</span></div>
          </div>
          <a className="scroll-cue" href="#shop">Scroll to discover <span>↓</span></a>
        </section>

        <section className="marquee" aria-label="Brand values">
          <div>VEGAN FORMULAS <span>✦</span> EXPRESSION WITHOUT RULES <span>✦</span> CRUELTY FREE <span>✦</span> MADE TO MOVE WITH YOU <span>✦</span></div>
        </section>

        <ProductCollection />

        <section className="campaign-edit" id="new" aria-labelledby="campaign-title">
          <header className="campaign-heading">
            <div><p className="eyebrow">Real looks · New arrivals</p><h2 id="campaign-title">Wear what’s <em>new.</em></h2></div>
            <p>Three effortless looks, paired with this season’s most-wanted beauty.</p>
          </header>
          <div className="campaign-grid">
            <article className="campaign-card campaign-rose">
              <Image src="/assets/campaign/chanel-glass-lip-look.png" alt="Model wearing a glossy rose lip and holding Chanel Rouge Coco Hydra Gloss" fill sizes="(max-width: 720px) 100vw, 33vw" />
              <div className="campaign-copy">
                <p className="campaign-number">Look 01 · Lips</p>
                <h3>Glass-lip glow</h3>
                <p>CHANEL Rouge Coco Hydra Gloss</p>
                <span>Hydrating shine in one swipe.</span>
                <a href="#product-chanel-gloss">Shop the gloss <b>↗</b></a>
              </div>
            </article>
            <article className="campaign-card campaign-mint">
              <Image src="/assets/campaign/givenchy-soft-focus-look.png" alt="Model with a luminous soft-focus complexion beside Givenchy Prisme Libre Serum Primer" fill sizes="(max-width: 720px) 100vw, 33vw" />
              <div className="campaign-copy">
                <p className="campaign-number">Look 02 · Complexion</p>
                <h3>Soft-focus skin</h3>
                <p>GIVENCHY Prisme Libre Serum Primer</p>
                <span>Correct. Blur. Glow.</span>
                <a href="#product-givenchy-primer">Shop the primer <b>↗</b></a>
              </div>
            </article>
            <article className="campaign-card campaign-gold">
              <Image src="/assets/campaign/lancome-fresh-cheek-look.png" alt="Model in a white suit with a fresh rosy glow beside Lancôme Juicy Tubes Cheeks" fill sizes="(max-width: 720px) 100vw, 33vw" />
              <div className="campaign-copy">
                <p className="campaign-number">Look 03 · Cheeks</p>
                <h3>Fresh cheek energy</h3>
                <p>LANCÔME Skin Idôle Juicy Tubes Cheeks</p>
                <span>Tap on. Blend out. Glow.</span>
                <a href="#product-lancome-cheeks">Shop the glow <b>↗</b></a>
              </div>
            </article>
          </div>
        </section>

        <section className="routine" id="routine" aria-labelledby="routine-title">
          <div className="routine-intro"><p className="eyebrow">Three steps. Five minutes.</p><h2 id="routine-title">The everyday<br/><em>edit.</em></h2></div>
          <ol className="steps">
            <li><span>01</span><div><h3>Perfect the canvas</h3><p>Prep and colour-correct with Givenchy Prisme Libre Serum Primer.</p></div><b>2 min</b></li>
            <li><span>02</span><div><h3>Build the glow</h3><p>Tap Lancôme Skin Idôle Juicy Tubes Cheeks high on the cheekbones.</p></div><b>1 min</b></li>
            <li><span>03</span><div><h3>Finish with shine</h3><p>Shape with YSL Lovenude, then layer Chanel Hydra Gloss or Dior Addict Glass.</p></div><b>2 min</b></li>
          </ol>
        </section>

        <section className="store-location" id="location" aria-labelledby="location-title">
          <div className="location-map">
            <Image src="/assets/store/veloura-collins-street-map.png" alt="Illustrated map showing Veloura at 101 Collins Street near Exhibition Street and Treasury Gardens in Melbourne" fill sizes="(max-width: 900px) 100vw, 68vw" />
            <span className="map-edition">Melbourne · Boutique No. 01</span>
          </div>
          <div className="location-copy">
            <p className="eyebrow">Our Melbourne boutique</p>
            <h2 id="location-title">Meet us on<br/><em>Collins Street.</em></h2>
            <p className="location-intro">Discover the collection in person, explore every shade, and find the pieces that feel unmistakably yours.</p>
            <address><span>Veloura Melbourne</span>101 Collins Street<br/>Melbourne VIC 3000<br/>Australia</address>
            <a className="button button-dark directions-link" href="https://www.google.com/maps/search/?api=1&query=101+Collins+Street+Melbourne+VIC+3000" target="_blank" rel="noopener noreferrer">View directions <span>↗</span></a>
          </div>
        </section>

        <Newsletter />
      </main>

      <footer>
        <a className="brand" href="#top">VELOURA</a>
        <p>Makeup for every version of you.</p>
        <div><a href="#">Instagram</a><a href="#">TikTok</a><a href="#location">101 Collins Street, Melbourne</a></div>
        <small>© 2026 Veloura Beauty · Melbourne VIC 3000</small>
      </footer>
    </CartProvider>
  );
}

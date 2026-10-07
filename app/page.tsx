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

        <section className="editorial" id="new">
          <div className="editorial-photo">
            <div className="portrait-shape"><span className="eye"></span><span className="brow"></span><span className="lips-art"></span></div>
            <p>COLOUR<br/>LOOK 02</p>
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">The colour story</p>
            <h2>Your face is<br/><em>the canvas.</em></h2>
            <p>There are no wrong shades, no reserved looks, no rules. Layer textures, blur the edges, and wear colour exactly the way you want to.</p>
            <a className="button button-light" href="#shop">Explore colour <span>↗</span></a>
            <div className="quote">“Beauty should feel like freedom.”<span>— The Veloura philosophy</span></div>
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

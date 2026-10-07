"use client";

import { useState } from "react";
import { useCart } from "./cart-context";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { bagCount } = useCart();

  return (
    <>
      <div className="announcement">Complimentary shipping on orders over $60 <span aria-hidden="true">·</span> Free returns</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Veloura home">VELOURA</a>
        <nav className={`desktop-nav${menuOpen ? " mobile-open" : ""}`} aria-label="Main navigation">
          <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#new" onClick={() => setMenuOpen(false)}>New in</a>
          <a href="#routine" onClick={() => setMenuOpen(false)}>Routine</a>
          <a href="#location" onClick={() => setMenuOpen(false)}>Visit us</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button search-button" aria-label="Search products">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>
          </button>
          <button className="bag-button" aria-label={`Shopping bag with ${bagCount} items`}>
            Bag <span className="bag-count">{bagCount}</span>
          </button>
          <button
            className="menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span><span></span>
          </button>
        </div>
      </header>
    </>
  );
}

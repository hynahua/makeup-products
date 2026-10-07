"use client";

import { useCart } from "./cart-context";

export function ShadeFinder() {
  const { showToast } = useCart();

  const openFinder = () => {
    document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth" });
    showToast("Explore our flexible shade range");
  };

  return <button className="text-link" onClick={openFinder}>Find your shade <span>→</span></button>;
}

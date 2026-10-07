"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

interface CartContextValue {
  bagCount: number;
  addToBag: () => void;
  showToast: (message: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [bagCount, setBagCount] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setToastMessage(""), 1800);
  }, []);

  const addToBag = useCallback(() => {
    setBagCount((count) => count + 1);
    showToast("Added to your bag");
  }, [showToast]);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const value = useMemo(() => ({ bagCount, addToBag, showToast }), [bagCount, addToBag, showToast]);

  return (
    <CartContext.Provider value={value}>
      {children}
      <div className={`toast${toastMessage ? " show" : ""}`} role="status" aria-live="polite">
        {toastMessage}
      </div>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

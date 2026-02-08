// cart/CartProvider.tsx
import React, { createContext, useContext, useMemo, useState } from "react";
import type {
  CartContextType,
  CartItem,
  Product,
} from "../pages/products/types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev; // brak duplikatów
      return [...prev, product];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price, 0),
    [items],
  );

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    clearCart,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};

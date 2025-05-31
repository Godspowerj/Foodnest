"use client";
import { Products, products } from "@/asset/Product";
import React, { createContext, useState } from "react";

type AppContextType = {
  cart: CartItem[];
  addToCart: (item: Products) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  authModal: null | "signin" | "signup";
  setAuthModal: React.Dispatch<
    React.SetStateAction<null | "signin" | "signup">
  >;
  selectCategory: string;
  SetSelectCategory: React.Dispatch<React.SetStateAction<string>>;
  filteredData: Products[];
  removeFromCart: (id: number) => void;
  updateCartQuantity: (id: number, amount: number) => void;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};
type CartItem = {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description?: string;

};
export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [authModal, setAuthModal] = useState<null | "signin" | "signup">(null);
  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectCategory, SetSelectCategory] = useState<string>("All");

  // Filter products based on selected category
  const filteredData =
    selectCategory === "All"
      ? products
      : products.filter((item) => item.category === selectCategory);

  // Function to add items to the cart
  const addToCart = (item: Products) => {
    setCart((prev) => {
      const found = prev.find((cartItem) => cartItem.id === item.id);
      if (found) {
        // If already in cart, increase quantity
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // If not in cart, add with quantity 1
      return [
        ...prev,
        {
          ...item,
          image: typeof item.image === "string" ? item.image : (item.image as any).src ?? "",
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((cartItem) => cartItem.id !== id));
  };

  const updateCartQuantity = (id: number, amount: number) => {
    setCart((prev) =>
      prev
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: Math.max(1, cartItem.quantity + amount) }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const Contextvalue = {
    isSidebarOpen,
    toggleSidebar,
    isCartOpen,
    toggleCart,
    cart,
    setCart,
    addToCart,
    authModal,
    setAuthModal,
    selectCategory,
    SetSelectCategory,
    filteredData,
    removeFromCart,
    updateCartQuantity,
  };
  return (
    <AppContext.Provider value={Contextvalue}>{children}</AppContext.Provider>
  );
};

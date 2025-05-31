"use client";
import { products } from "@/asset/Product";
import React, { createContext, useState } from "react";

type AppContextType = {
  cart: CartItem[];
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
  filteredData: { category: string }[];
};
type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
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

  const filteredData =
    selectCategory === "All"
      ? products
      : products.filter((item) => item.category === selectCategory);

  const Contextvalue = {
    isSidebarOpen,
    toggleSidebar,
    isCartOpen,
    toggleCart,
    cart,
    authModal,
    setAuthModal,
    selectCategory,
    SetSelectCategory,
    filteredData,
  };
  return (
    <AppContext.Provider value={Contextvalue}>{children}</AppContext.Provider>
  );
};

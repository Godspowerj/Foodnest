"use client";
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

  // const addToCart = (item: CartItem) => {
  //   setCart((prevCart) => {
  //     const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
  //     if (existingItem) {
  //       return prevCart.map((cartItem) =>
  //         cartItem.id === item.id
  //           ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
  //           : cartItem
  //       );
  //     } else {
  //       return [...prevCart, item];
  //     }
  //   });
  // };

  const Contextvalue = {
    isSidebarOpen,
    toggleSidebar,
    isCartOpen,
    toggleCart,
    cart,
    // setCart,
    // addToCart,
    authModal,
    setAuthModal,
  };
  return (
    <AppContext.Provider value={Contextvalue}>{children}</AppContext.Provider>
  );
};

"use client";
import { Products, products } from "@/asset/Product";
import React, { createContext, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

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
  categoryCount: number;
  placeOrderData: () => void;
  placeOrder: PlaceOrder;
  removeFromOrder: (id: number) => void;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
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
type PlaceOrder = CartItem[];


export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [authModal, setAuthModal] = useState<null | "signin" | "signup">(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectCategory, SetSelectCategory] = useState<string>("All");
  const [placeOrder, setPlaceOrder] = useState<PlaceOrder>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // Toggle functions for sidebar and cart
  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Filter products based on selected category
  const filteredData =
    selectCategory === "All"
      ? products
      : products.filter((item) => item.category === selectCategory);

  // Count of products in the selected category
  const categoryCount =
    selectCategory === "All"
      ? 0
      : products.filter((item) => item.category === selectCategory).length;

  // Function to add items to the cart
  const addToCart = (item: Products) => {
    setCart((prev) => {
      const found = prev.find((cartItem) => cartItem.id === item.id);
      if (found) {
        // If already in cart, increase quantity
        return prev.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem } : cartItem
        );
      }
      // If not in cart, add with quantity 1
      return [

        ...prev,
        {
          ...item,
          image:
          // Ensure image is a string, fallback to empty string if not
            typeof item.image === "string"
              ? item.image
              : (item.image as any).src ?? "",
          quantity: 1,
        },
      ];
    });
  };

  const handleLoading = () => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    setPlaceOrder(cart);
    toast.success('Order placed successfully! Check your order page');
    setCart([]);
  }, 2000);
};

const placeOrderData = () => {
  handleLoading();
};

  const removeFromOrder = (id: number) => {
  setPlaceOrder(prev => prev.filter(item => item.id !== id));
    toast.error('Item removed from order');
    router.push('/order');
};
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((cartItem) => cartItem.id !== id));
    toast.error('Item removed from cart')
  };

  // Function to update the quantity of items in the cart
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
    categoryCount,
    placeOrderData,
    placeOrder,
    removeFromOrder,
    loading,
    setLoading,
  };
  return (
    <AppContext.Provider value={Contextvalue}>{children}</AppContext.Provider>
  );
};

"use client";
import { Products, products } from "@/asset/Product";
import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

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
  favorite: favorite[];
  setFavorite: React.Dispatch<React.SetStateAction<favorite[]>>;
  handleFavourite: (item: favorite) => void;
  removeFromFavourite: (id: number) => void;
  currentUser: UserType;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserType>>;
  emailSignup: (email: string, password: string) => Promise<void>;
  emailSignin: (email: string, password: string) => Promise<void>;
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
type favorite = Products;
type UserType = {
  name?: string | null;
  email?: string | null;
  photo?: string | null;
  uid?: string;
} | null;

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
  const [favorite, setFavorite] = useState<favorite[]>([]);
  const [currentUser, setCurrentUser] = useState<UserType>(null);

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
      toast.success("Order placed successfully! Check your order page");
      setCart([]);
    }, 2000);
  };

  // Function to place an order
  const placeOrderData = () => {
    handleLoading();
  };

  const removeFromOrder = (id: number) => {
    setPlaceOrder((prev) => prev.filter((item) => item.id !== id));
    toast.error("Item removed from order");
    router.push("/order");
  };
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((cartItem) => cartItem.id !== id));
    toast.error("Item removed from cart");
  };

  const handleFavourite = (item: favorite) => {
    setFavorite((prev) => {
      const found = prev.find((favItem) => favItem.name === item.name);
      if (found) {
        // If already in favorites, remove it
        return prev.filter((favItem) => favItem.name !== item.name);
      }
      // If not in favorites, add it
      return [...prev, item];
    });
  };

  const removeFromFavourite = (id: number) => {
    setFavorite((prev) => prev.filter((favItem) => favItem.id !== id));
    toast.error("Item removed from favourites");
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
 
 

const emailSignup = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    setCurrentUser({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      uid: user.uid,
    });
    toast.success("✅ Signed up successfully!");
  } catch (error: any) {
    console.error("❌ Signup error:", error.message);
    toast.error(error.message);
  }
};

const emailSignin = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    setCurrentUser({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      uid: user.uid,
    });
    toast.success("✅ Logged in successfully!");
  } catch (error: any) {
    console.error("❌ Signin error:", error.message);
    toast.error(error.message);
  }
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
    favorite,
    setFavorite,
    handleFavourite,
    removeFromFavourite,
    currentUser,
    setCurrentUser,
    emailSignup,     
    emailSignin
  };
  return (
    <AppContext.Provider value={Contextvalue}>{children}</AppContext.Provider>
  );
};

'use client'
import React, { createContext, useState } from "react";

type AppContextType = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
};
export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const Contextvalue = {
    isSidebarOpen,
    toggleSidebar,
    isCartOpen,
    toggleCart,
  };
  return (
    <AppContext.Provider value={Contextvalue}>{children}</AppContext.Provider>
  );
};

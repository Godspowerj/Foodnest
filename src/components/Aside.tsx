"use client";
import React from "react";
import CartItems from "./cartItems";
import { AppContext } from "./AppContextApi/AppContext";
import { useContext } from "react";

const Aside: React.FC = () => {
  const { isCartOpen, } = useContext(AppContext)!;
  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/30  z-40 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      <div
        className={`bg-white fixed lg:static top-0 right-0 w-full lg:w-96 h-screen p-6 space-y-6 overflow-y-scroll scrollbar-hide lg:scrollbar-hide rounded-t-md transition-transform duration-500 z-50
    ${
      isCartOpen
        ? "translate-y-[90px] lg:translate-y-full"
        : "translate-y-full lg:translate-y-0"
    }
  `}
      >
        <CartItems />
      </div>
    </>
  );
};

export default Aside;

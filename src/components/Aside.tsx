"use client";
import React from "react";
import CartItems from "./cartItems";
import { AppContext } from "./AppContextApi/AppContext";
import { useContext } from "react";

const Aside: React.FC = () => {
  const { isCartOpen } = useContext(AppContext)!;
  return (
    <>
      <div
        className={`bg-white absolute lg:static lg:h-screen  top-0 w-full right-0 h-screen p-4 space-y-6 overflow-y-scroll scrollbar-hide rounded-t-md inset-0 transition-transform duration-500 ${
          isCartOpen ? "translate-y-[90px]" : "translate-y-full lg:translate-y-0"
        } `}
      >
        <CartItems />
      </div>
    </>
  );
};

export default Aside;

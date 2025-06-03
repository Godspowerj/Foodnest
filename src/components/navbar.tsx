"use client";
import React from "react";
import Input from "./input";
import {  ShoppingIcon} from "@/asset/asset";
import { useContext } from "react";
import { AppContext } from "./AppContextApi/AppContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { toggleSidebar, isSidebarOpen, toggleCart, cart } =
    useContext(AppContext)!;
  const pathname = usePathname();

  return (
    <div className="">
      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center justify-between w-full pb-4 md:pb-6">
        <div className="cursor-pointer text-black/100" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 md:size-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </div>

        <div
          className="relative size-8 md:size-10 text-red-600 bg-white shadow-sm rounded-md flex items-center justify-center cursor-pointer"
          onClick={toggleCart}
        >
          <span className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
            <ShoppingIcon />
          </span>
          <span className={`absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5 flex items-center justify-end ${cart.length > 0 ? "block" : "hidden"}`}>
            {cart.length}
          </span>
        </div>
      </div>
      {/* Greeting Section */}
      <div className={`${['/order', '/favourite','/history'].includes(pathname) ? 'hidden' : 'block'} mb-1 lg:hidden md:mb-3`}>
        <span className="text-2xl md:text-2xl font-semibold py-1">
          Hello there!
        </span>
        <p className="text-gray-500 text-sm md:text-lg mt-1">
          Find your favorite meals!
        </p>
      </div>
    

      {/* Main Navbar */}
    <div className={`${['/order', '/favourite','/history'].includes(pathname) ? 'hidden lg:hidden' : 'flex lg:flex lg:items-center w-full lg:justify-between'}`}>
       <h2 className={" text-black/70 md:text-2xl lg:block font-medium hidden md:hidden"}>
       Choose category
       </h2>
        <div className="w-full max-w-md">
          <Input
            name="search"
            value=""
            onChange={() => {}}
            placeholder="Search for food, drinks, etc."
            className="bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

"use client";
import React from "react";
import Input from "./input";
import Image from "next/image";
import { HamburgerIcon, ShoppingIcon, CancelIcon } from "@/asset/asset";
import { useContext } from "react";
import { AppContext } from "./AppContextApi/AppContext";

const Navbar = () => {
  const { toggleSidebar, isSidebarOpen, toggleCart } = useContext(AppContext)!;

  return (
    <div className="">
      <div className="lg:hidden flex items-center justify-between w-full pb-4">
        <div className=" cursor-pointer text-black/100" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </div>

        <div
          className="size-8 text-red-600 bg-white shadow-sm rounded-md flex items-center justify-center cursor-pointer"
          onClick={toggleCart}
        >
          <span className="w-5 h-5 flex items-center justify-center">
            <ShoppingIcon />
          </span>
        </div>
      </div>

      <div className="mb-4 lg:hidden">
        <span className="text-lg font-semibold py-2">Hello there!</span>
        <p className="text-gray-500 text-sm mt-1">
          Welcome to FoodNest. Find your favorite meals!
        </p>
      </div>

      <div className="lg:flex  lg:items-center  w-full lg:justify-between">
        <h2 className="text-2xl font-medium hidden md:block">
          Choose category
        </h2>
        <div className="  w-full max-w-md ">
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

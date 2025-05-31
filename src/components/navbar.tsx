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
      <div className="lg:hidden flex items-center justify-between w-full pb-2">
        <div
          className="size-14 cursor-pointer text-black/100"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <span className="w-10 h-10 inline-block"><CancelIcon /></span>
          ) : (
            <span className="w-10 h-10 inline-block"><HamburgerIcon /></span>
          )}
        </div>

        <div
          className="size-10   text-red-600 bg-white shadow-sm  rounded-md flex items-center justify-center cursor-pointer"
          onClick={toggleCart}
        >
          <ShoppingIcon />
        </div>
      </div>

      <div className="mb-4 ">
        <span className="text-lg font-semibold  py-2 ">
          Hello there!
        </span>
        <p className="text-gray-500 text-sm mt-1">Welcome to FoodNest. Find your favorite meals!</p>
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

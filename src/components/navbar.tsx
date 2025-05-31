'use client'
import React from "react";
import Input from "./input";
import Image from "next/image";
import { HamburgerIcon, ShoppingIcon, CancelIcon } from "@/asset/asset";
import { useContext } from "react";
import { AppContext } from "./AppContextApi/AppContext";

const Navbar = () => {
  const {toggleSidebar,isSidebarOpen,toggleCart } = useContext(AppContext)!;
  
  return (
    <div className="">
      <div className="lg:hidden flex items-center justify-between w-full pb-2">
        
        <div className="size-7 cursor-pointer duration-500 transition-transform " onClick={toggleSidebar}>
          {isSidebarOpen ? <CancelIcon /> :<HamburgerIcon /> }
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-10 h-10 object-contain "
          />
          <h1 className="text-sm font-bold">FoodNest</h1>
        </div>

        <div className="size-7 " onClick={toggleCart}>
          <ShoppingIcon />
        </div>
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

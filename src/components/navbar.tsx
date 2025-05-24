import React from "react";
import Input from "./input";
import Image from "next/image";
import { hamburgerIcon as HamburgerIcon, ShoppingIcon } from "@/asset/asset";
const Navbar = () => {
  return (
    <div className="">
      <header className="lg:hidden flex items-center justify-between w-full pb-2">
        <div className="size-7 ">
          <HamburgerIcon />
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

        <div className="size-7 ">
          <ShoppingIcon />
        </div>
      </header>
      <div className="lg:flex  lg:items-center  w-full lg:justify-between">
        <h2 className="text-2xl font-medium hidden md:block">
          Choose category
        </h2>
        <Input />
      </div>
    </div>
  );
};

export default Navbar;

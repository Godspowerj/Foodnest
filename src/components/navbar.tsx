import React from "react";
import Input from "./input";
import Image from "next/image";
import { hamburgerIcon as HamburgerIcon, ShoppingIcon } from "@/asset/asset";
const Navbar = () => {
  return (
    <div className="md:flex items-center  justify-between">
      <header className="lg:hidden flex items-center justify-between w-full pb-2">
        <div className="size-7 ">
          <HamburgerIcon />
        </div>

        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="w-10 h-10 object-contain mb-4"
        />

        <div className="size-7 ">
          <ShoppingIcon />
        </div>
      </header>
      <h2 className="text-2xl font-medium hidden md:block">Choose category</h2>
      <Input />
    </div>
  );
};

export default Navbar;

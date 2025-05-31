"use client";
import React from "react";
import Image from "next/image";
import { products } from "@/asset/Product"; // Assuming you have a products array in this path
import { useContext } from "react";
import { AppContext } from "./AppContextApi/AppContext";
// Import your context
const Category = () => {
  const categoryData = [
    { image: "/biryani.png", name: "All" },
    { image: "/bread.png", name: "bread" },
    { image: "/cupcake.png", name: "cupcake" },
    { image: "/coffee.png", name: "Dessert" },
    { image: "/noodles.png", name: "noodles" },
    { image: "/cake.png", name: "cake" },
    { image: "/orange-juice.png", name: "Drinks" },
    { image: "/ramen.png", name: "ramen" },
  ];
  const { filteredData, SetSelectCategory, selectCategory } =
    useContext(AppContext)!; // Use the context to get filtered data

  return (
    <div className="w-full mt-8">
      <div className="grid md:grid-cols-8 gap-2 grid-cols-4">
        {categoryData.map((item, index) => (
          <div
            key={index}
            onClick={() => SetSelectCategory(item.name)}
            className={`flex flex-col items-center rounded-xl shadow-sm hover:shadow-md transition p-3 cursor-pointer group
      ${
        selectCategory === item.name ? "ring-2 ring-[#6e4231] bg-[#f9f1f0]" : "bg-white "
      }`}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-primary/10 transition">
              <Image
                src={item.image}
                width={36}
                height={36}
                alt={item.name}
                className="object-contain"
              />
            </div>
            <span className="mt-2 text-xs font-medium text-gray-700 group-hover:text-primary transition">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

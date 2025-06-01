'use client'
import React, { useContext } from "react";
import Image from "next/image";
import { AppContext } from "./AppContextApi/AppContext";
import { Products } from "@/asset/Product";


const CategoryMenu = () => {
  const { filteredData,selectCategory,addToCart,updateCartQuantity,cart } = useContext(AppContext)!;

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7 mt-8 ">
      {filteredData.length === 0 ? (
        <div className="col-span-2 text-center text-gray-500">
          No items found in the "{selectCategory}" category.
        </div>
      ) : (
        (filteredData as Products[]).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md flex gap-4 p-4 hover:shadow-lg transition-shadow"
          >
            <div className="sm:flex flex-col items-center space-y-3">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-xl object-cover bg-gray-50 w-30 h-30 p-2"
              />
              <div className="flex items-center gap-2 mb-2">
                <button onClick={() => updateCartQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center font-medium text-base hover:text-2xl hover:transform-transition  text-center bg-gray-50 rounded-full p-0">-</button>
                <span className="w-6 text-center">{cart.find(cartItem => cartItem.id === item.id)?.quantity || 0}</span>
                <button  onClick={() => updateCartQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center font-medium text-base hover:text-2xl hover:transform-transition   text-center bg-gray-50 rounded-full p-0">+</button>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between ">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
                <span className="text-primary font-bold text-base">
                  ${item.price}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-2">{item.description}</p>
              <button onClick={() => addToCart(item)} className="bg-primary text-white bg-[#6e4231] w-full px-4 py-3 rounded-full text-sm font-medium hover:bg-primary-dark transition">
                {cart.some((cartItem) => cartItem.id === item.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryMenu;
"use client";
import React from "react";
import Navbar from "@/components/navbar";
import { useContext } from "react";
import { AppContext } from "@/components/AppContextApi/AppContext";
import Image from "next/image";

const Favourites = () => {
  const { favorite,removeFromFavourite } = useContext(AppContext)!;
  return (
    <main className="min-h-screen bg-[#fdfaf7] lg:p-6 p-4">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl font-semibold text-[#6e4231] mb-6 border-b border-[#6e4231]/20 pb-3">
          My Favourites
        </h1>

        <div className="space-y-4">
          {favorite.length === 0 ? (
            <div className="flex flex-col items-center justify-center ">
              <img
                src="/empty-favourite.png"
                alt="No Favourites"
                className="w-24 h-24 mb-4"
              />
              <h2 className="text-lg font-semibold text-[#6e4231]">
                No Favourites Yet
              </h2>
              <p className="text-gray-500 text-sm">
                Add items to your favourites to see them here.
              </p>
            </div>
          ) : (
            favorite.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition text-sm"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-[#6e4231]">{item.name}</h2>
                  <p className="text-sm text-gray-600 flex-wrap flex">{item.description.slice(0,50)}...</p>
                  <span className="text-[#6e4231] font-semibold mt-1 block">
                    ₦{item.price}
                  </span>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <button className="text-[#6e4231] text-xs border border-[#6e4231] rounded-md px-2 py-1 hover:bg-[#6e4231] hover:text-white transition">
                    Reorder
                  </button>
                  <button onClick={()=>removeFromFavourite(item.id)} className="text-[11px] text-red-500 hover:underline">
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Favourites;

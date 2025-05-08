"use client";
import { Feature } from "../../../types";
import React from "react";

const StartPage = () => {
  const features: Feature[] = [
    {
      image: "/burger.png",
      title: "Food Delivery",
    },
    {
      image: "/shoppingcart.png",
      title: "Shopping",
    },
    {
      image: "/homecleaning.png",
      title: "House Cleaning",
    },
    {
      image: "/quickerrand.png",
      title: "Quick Errand",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#161616] px-4 pt-7 space-y-5">
        <h1 className="text-3xl text-[#afafaf]">
          <span className="text-4xl">e</span>rrandgo
        </h1>
        <div className="text-[#d6d5d5]">
          <p className="pb-2">Deliver to </p>
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M480.07-485.39q29.85 0 51.04-21.26 21.2-21.26 21.2-51.11 0-29.85-21.26-51.05Q509.79-630 479.93-630q-29.85 0-51.04 21.26-21.2 21.26-21.2 51.12 0 29.85 21.26 51.04 21.26 21.19 51.12 21.19ZM480-179.46q117.38-105.08 179.65-201.58 62.27-96.5 62.27-169.04 0-109.38-69.5-179.84-69.5-70.46-172.42-70.46-102.92 0-172.42 70.46-69.5 70.46-69.5 179.84 0 72.54 62.27 169.04 62.27 96.5 179.65 201.58Zm0 79.84Q329-230.46 253.54-343.15q-75.46-112.7-75.46-206.93 0-138.46 89.57-224.19Q357.23-860 480-860t212.35 85.73q89.57 85.73 89.57 224.19 0 94.23-75.46 206.93Q631-230.46 480-99.62Zm0-458.07Z" />
            </svg>
            <div className="flex gap-4">
              <p>32 ogale farm road eleme</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center text-[#d6d5d5]">
            <p className="font-bold">Suggestions</p>
            <p>All</p>
          </div>

          <div className="flex text-center overflow-x-auto w-full gap-3 text-sm scrollbar-hide">
            {features.map((item, index) => (
              <div
                key={index}
                className="text-sm font-bold text-[#d6d5d5] w-30 py-2 rounded-lg bg-[#292929] flex-shrink-0"
              >
                <img src={item.image} alt="" className="w-20 h-20 mx-auto" />
                <h2 className="">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>What do you need help with?</h2>
          <div className="flex px-3 py-4 rounded-2xl bg-black w-full justify-between items-center gap-3 mt-4">
            <button className="items-start" type="button">
              Request New Task
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#fffff"
            >
              <path d="M665.08-450H180v-60h485.08L437.23-737.85 480-780l300 300-300 300-42.77-42.15L665.08-450Z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartPage;

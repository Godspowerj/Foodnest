"use client";
import Image from "next/image";
import {
  HomeIcon,
  MenuIcon,
  HistoryIcon,
  LogoutIcon,
  WalletIcon,
} from "@/asset/asset";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "./AppContextApi/AppContext";

const Sidebar: React.FC = () => {
  const sidebarItems = [
    {
      icon: <HomeIcon />,
      name: "Home",
      path: "/",
    },
    {
      icon: <MenuIcon />,
      name: "Menu",
      path: "/",
    },
    {
      icon: <HistoryIcon />,
      name: "History",
      path: "/",
    },
    {
      icon: <WalletIcon />,
      name: "Wallet",
      path: "/",
    },
  ];

  const { isSidebarOpen } = useContext(AppContext)!;

  return (
    <>
      <div
        className={`bg-white fixed bottom-0 left-0 w-full h-16 flex justify-between items-center px-4 py-2 shadow-lg z-50 lg:static lg:h-screen lg:w-20 lg:flex-col lg:justify-between lg:items-center lg:px-4 lg:py-6 transition-transform duration-500 ${
          isSidebarOpen ? "translate-y-0" : "translate-y-full lg:translate-y-0"
        }`}
      >
        <div className="hidden lg:flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-10 h-10 object-contain mb-3"
          />
          <h1 className="text-[16px] font-bold">FoodNest</h1>
        </div>

        <nav className="flex w-full justify-between lg:flex-col lg:space-y-5 lg:w-auto">
          {sidebarItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className="flex flex-col items-center flex-1"
            >
              <div className="text-center flex flex-col items-center justify-center">
                <span>{item.icon}</span>
                <span className="mt-1 text-[12px] lg:mt-2 lg:text-[14px]">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </nav>
        <div className="flex flex-col text-center justify-center items-center hidden lg:flex">
          <LogoutIcon />
          <p>Logout</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

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
        className={`bg-white fixed h-screen flex flex-col transition-transform duration-500 left-0   justify-between items-center px-4 py-6 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:static md:translate-x-0" 
        }`}
      >
        <div className="flex flex-col items-center max-md:hidden">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-10 h-10 object-contain mb-3"
          />
          <h1 className="text-[16px] font-bold">FoodNest</h1>
        </div>

        <nav className="space-y-5">
          {sidebarItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className="flex flex-col items-center"
            >
              <div
                key={index}
                className="text-center  flex flex-col items-center justify-center "
              >
                <span className="">{item.icon}</span>
                <span className="mt-2 text-[14px]">{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>
        <div className="flex flex-col text-center justify-center items-center">
          <LogoutIcon />
          <p>Logout</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

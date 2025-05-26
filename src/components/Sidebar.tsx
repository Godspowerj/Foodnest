"use client";
import Image from "next/image";
import {
  HomeIcon,
  OrderIcon,
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
      icon: <OrderIcon />,
      name: "Orders",
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
        <div className="flex items-center justify-between w-full lg:flex-col lg:items-center gap-10">
          <div className="hidden lg:flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-8 h-8 object-contain mb-2"
            />
            <h1 className="text-[14px] font-bold">FoodNest</h1>
          </div>

          <nav className="flex w-full items-center justify-evenly lg:flex-col lg:space-y-5 lg:w-auto">
            {sidebarItems.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className="flex-1 flex flex-col items-center"
              >
                <span>{item.icon}</span>
                <span className="mt-1 text-[12px] lg:mt-2 lg:text-[14px]">
                  {item.name}
                </span>
              </Link>
            ))}

            {/* Profile/logout as a nav item on mobile only */}
            <Link
              href="/logout"
              className="flex-1 flex flex-col items-center lg:hidden"
            >
              <Image
                src="/profile.png"
                alt="Profile"
                width={40}
                height={40}
                className="w-7 h-7 rounded-full object-cover"
              />
              <span className="mt-1 text-[12px]">Profile</span>
            </Link>
          </nav>
        </div>

        {/* Profile/logout at the bottom on desktop only */}
        <Link href="/logout">
          <div className="hidden lg:flex flex-col items-center justify-center ">
            <Image
              src="/profile.png"
              alt="Profile"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="mt-1 text-[12px] lg:mt-2 lg:text-[14px]">
              Profile
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;

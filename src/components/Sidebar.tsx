"use client";
import Image from "next/image";
import {
  HomeIcon,
  OrderIcon,
  HistoryIcon,
  CancelIcon,
  FavoriteIcon,
} from "@/asset/asset";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "./AppContextApi/AppContext";
import { usePathname } from "next/navigation";

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
      path: "/order",
    },
    {
      icon: <HistoryIcon />,
      name: "History",
      path: "/history",
    },
    {
      icon: <FavoriteIcon />,
      name: "Favourite",
      path: "/favourite",
    },
  ];

  const { isSidebarOpen, setAuthModal, toggleSidebar, placeOrder,favorite,currentUser } =
    useContext(AppContext)!;
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href
      ? " transition-all duration-200 transform scale-105 text-white bg-[#6e4231] rounded-lg lg:px-2 px-0 lg:py-2 py-1"
      : " text-gray-500 hover:text-[#6e4231] transition-colors duration-200 flex items-center justify-center";
  };

  return (
    <>
      <div
        className={`bg-white fixed bottom-0 left-0 w-full h-16 flex justify-between items-center  py-2 shadow-lg z-50 lg:static lg:h-screen lg:w-20 lg:flex-col lg:justify-between lg:items-center lg:px-5 lg:py-4 transition-transform duration-500 ${
          isSidebarOpen ? "translate-y-0" : "translate-y-full lg:translate-y-0"
        }`}
      >
        <div className="flex py-3 items-center justify-between w-full lg:flex-col lg:items-center gap-10">
          <nav className="flex w-full items-center justify-evenly lg:flex-col lg:space-y-5 lg:w-auto">
            {sidebarItems.map((item, index) => (
              <Link
                onClick={toggleSidebar}
                href={item.path}
                key={index}
                className={`flex-1 flex flex-col items-center ${isActive(
                  item.path
                )}`}
              >
                <span className="relative">
                  {item.icon}
                  {item.name === "Orders" && placeOrder.length > 0 && (
                    <span  className="absolute -top-2 -right-2 z-10  shadow-sm bg-[#6e4231] text-white text-xs rounded-full w-4 h-4 text-center">
                      {placeOrder.length}
                    </span>
                  )}
                  {item.name === "Favourite" && favorite.length > 0 && (
                    <span className="absolute -top-2 -right-2 z-10 shadow-sm bg-[#6e4231] text-white text-xs rounded-full w-4 h-4 text-center">
                      {favorite.length}
                    </span>
                  )}

                </span>

                <span className="text-[12px] lg:text-[14px]">
                  {item.name}
                </span>
              </Link>
            ))}

            {/* Profile/logout as a nav item on mobile only */}
            <button
              onClick={() => setAuthModal("signin")}
              className="flex-1 flex flex-col items-center lg:hidden"
            >
              <Image
                src={currentUser?.photo || "/profile.png"}
                alt="Profile"
                width={40}
                height={40}
                className="w-7 h-7 rounded-full object-cover"
              />
              {/* <span className="text-[12px] text-gray-500 lg:mt-2 lg:text-[14px]">
                {currentUser?.name || "Profile"}
              </span> */}
            </button>
          </nav>
        </div>

        {/* Profile/logout at the bottom on desktop only */}
        <button onClick={() => setAuthModal("signin")}>
          <div className="hidden lg:flex flex-col items-center justify-center ">
            <Image
              src="/profile.png"
              alt="Profile"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            
          </div>
        </button>
      </div>
    </>
  );
};

export default Sidebar;

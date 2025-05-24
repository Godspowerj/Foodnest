import React from "react";
import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";
import CartItems from "./cartItems";
const Aside: React.FC = () => {
  return (
    <>
      <div className="bg-white h-screen p-4 space-y-6 overflow-y-scroll scrollbar-hide ">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <Image src="/profile.png" width={40} height={40} alt="profile" />
            <div className="leading-3">
              <p className="text-sm text-gray-400">I'm a cashier</p>
              <h2>isaac newton</h2>
            </div>
          </div>

          <div className="flex items-start">
            <IoNotificationsOutline />
          </div>
        </div>
        <CartItems/>
      </div>
    </>
  );
};

export default Aside;

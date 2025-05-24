import React from "react";
import CartItems from "./cartItems";
const Aside: React.FC = () => {
  return (
    <>
      <div className="bg-white h-screen p-4 space-y-6 overflow-y-scroll scrollbar-hide ">
        <CartItems/>
      </div>
    </>
  );
};

export default Aside;

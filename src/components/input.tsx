import React from "react";

const Input = () => {
  return (
    <div>
      <div className="w-full flex justify-between rounded-lg items-center py-2 px-4  border-gray-400 bg-[#fff]">
        <input
          type="text"
          placeholder="Search a category or menu"
          className="w-full  border-none outline-0  text-base "
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-gray-500 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Input;

// pages/signin.tsx
"use client";
import React, { useState } from "react";
import InputField from "@/components/input";
import { useContext } from "react";
import { AppContext } from "./AppContextApi/AppContext";
import Button from "@/components/button";
import { CancelIcon } from "@/asset/asset";
import Image from "next/image";

export default function SignIn() {
  const { setAuthModal } = useContext(AppContext)!;
  const [formData, setFormData] = useState({ text: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign In:", formData);
  };

  return (
    <div className="fixed inset-0 top-0 left-0 w-full h-full flex items-center justify-center bg-black/20  z-[1000]">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md flex flex-col justify-center">
        <div className="flex justify-end mb-1">
          <button
            className="border-1 border-gray-100 cursor-pointer rounded-full p-2 text-black/60"
            onClick={() => setAuthModal(null)}
            aria-label="Close"
          >
            <CancelIcon />
          </button>
        </div>
        

        <div className="text-center mb-6">
          <h2 className="text-2xl font-medium text-center ">Sign In</h2>
          <p>Sign in to Continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Phone Number"
            name="text"
            type="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="e.g. 07083009249"
          />
          <Button type="submit">Sign in</Button>
        </form>
        <p className="text-base text-center text-gray-600 mt-4">
          New to Foodnest?{" "}
          <button
            type="button"
            className="text-blue-600 hover:underline leading-normal"
            onClick={() => setAuthModal("signup")}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

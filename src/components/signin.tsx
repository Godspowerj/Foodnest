"use client";
import React, { useState, useContext } from "react";
import InputField from "@/components/input";
import { AppContext } from "./AppContextApi/AppContext";
import Button from "@/components/button";
import { CancelIcon } from "@/asset/asset";
import toast from "react-toastify"; // ensure you're using toast
import Image from "next/image";

export default function SignIn() {
  const { setAuthModal, emailSignin } = useContext(AppContext)!;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return;
    }

    await emailSignin(formData.email, formData.password);
    setAuthModal(null);
    try {
          await emailSignin(formData.email, formData.password);
          setAuthModal(null);
        } catch (error: any) {
          console.error("Email Sign Up Error:", error.message || error);

        }
  };

  return (
    <div className="fixed inset-0 top-0 left-0 w-full h-full flex items-center justify-center bg-black/20 z-[1000]">
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
          <h2 className="text-2xl font-medium text-center">Sign In</h2>
          <p>Sign in to Continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. user@example.com"
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Your password"
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

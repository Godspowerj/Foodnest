"use client";
import React, { useState } from "react";
import InputField from "@/components/input";
import { useContext } from "react";
import { AppContext } from "./AppContextApi/AppContext";
import Button from "./button";

export default function SignUp() {
  const { setAuthModal } = useContext(AppContext)!;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign Up:", formData);
  };

  return (
    <div className="fixed inset-0 top-0 left-0 w-full h-full flex items-center justify-center bg-black/20  z-[1000]">
      <div className="max-w-md w-full bg-white p-7 rounded-lg shadow-md">
        <div className="text-center ">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-8 h-8 object-contain mb-2 mx-auto"
          />
        </div>
        <div>
          <h2 className="text-2xl font-medium text-center">Sign Up</h2>
          <p className="text-center text-gray-600">Sign up to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          <InputField
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <InputField
            label="Phone Number"
            name="phone"
            type="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="eg. 07083009249"
          />

          <Button type="submit">sign up</Button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          By signing up, you agree to our{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Privacy Policy
          </span>
        </p>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition"
        >
          <img src="/google-icon.png" alt="Google" className="w-5 h-5" />
          <span>Sign up with Google</span>
        </button>
        <p className="text-base text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <button
            type="button"
            className="text-blue-600 hover:underline"
            onClick={() => setAuthModal("signin")}
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}

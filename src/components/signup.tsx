"use client";
import React, { useState, useContext } from "react";
import InputField from "@/components/input";
import { AppContext } from "./AppContextApi/AppContext";
import Button from "./button";
import { CancelIcon } from "@/asset/asset";
import { toast } from "react-toastify";

export default function SignUp() {
  const { setAuthModal, emailSignup } = useContext(AppContext)!;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await emailSignup(formData.email, formData.password);
      setAuthModal(null);
    } catch (error: any) {
      console.error("Email Sign Up Error:", error.message || error);
      toast.error("Sign up failed");
    }
  };

  return (
    <div className="fixed inset-0 top-0 left-0 w-full h-full flex items-center justify-center bg-black/20 z-[1000]">
      <div className="max-w-md w-full bg-white p-7 rounded-lg shadow-md">
        <div className="flex justify-end mb-1">
          <button
            className="border border-gray-100 cursor-pointer rounded-full p-2 text-black/60"
            onClick={() => setAuthModal(null)}
            aria-label="Close"
          >
            <CancelIcon />
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-medium text-center">Sign Up</h2>
          <p className="text-center text-gray-600">Sign up to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          <Button type="submit">Sign Up</Button>
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

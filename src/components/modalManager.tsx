'use client';
import { useContext } from "react";
import { AppContext } from "@/components/AppContextApi/AppContext";
import SignIn from "@/components/signin";
import SignUp from "@/components/signup";

const ModalManager = () => {
  const { authModal } = useContext(AppContext)!;
  return (
    <>
      {authModal === "signin" && <SignIn />}
      {authModal === "signup" && <SignUp />}
    </>
  );
};

export default ModalManager;
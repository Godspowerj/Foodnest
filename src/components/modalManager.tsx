'use client';
import { useContext } from "react";
import { AppContext } from "@/components/AppContextApi/AppContext";
import SignIn from "@/components/signin";
import SignUp from "@/components/signup";

const ModalManager = () => {
  const { authModal,currentUser } = useContext(AppContext)!;
  return (
    <>
      {authModal === "signin" && !currentUser?.uid && <SignIn />}
      {authModal === "signup" && !currentUser?.uid && <SignUp />}

    </>
  );
};

export default ModalManager;
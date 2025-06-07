'use client';
import { useContext } from "react";
import { AppContext } from "@/components/AppContextApi/AppContext";
import SignIn from "@/components/signin";
import SignUp from "@/components/signup";

const ModalManager = () => {
  const { authModal, currentUser } = useContext(AppContext)!;

  let authComponent = null;

  if (!currentUser?.uid) {
    if (authModal === "signin") {
      authComponent = <SignIn />;
    } else if (authModal === "signup") {
      authComponent = <SignUp />;
    }
  }

  return <>{authComponent}</>;
};

export default ModalManager;

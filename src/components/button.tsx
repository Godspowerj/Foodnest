import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`w-full bg-[#6e4231]  py-3 rounded-md hover:bg-[#6e4231]  text-white transition ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
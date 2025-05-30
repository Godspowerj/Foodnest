import React from "react";

interface InputFieldProps {
  label?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputFieldProps> = ({ label, type = "text", name, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#6e4231]  transition-colors duration-200 w-full"
      />
    </div>
  );
};

export default Input;
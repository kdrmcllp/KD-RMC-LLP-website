"use client";

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string; // to extend styles if needed
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative inline-block px-6 py-3 text-base font-semibold text-[#1b2c50] border-2 border-[#1b2c50] rounded-lg 
        transition-all duration-1000 ease-out 
        hover:text-white hover:shadow-[inset_0_-100px_0_0_#1b2c50] 
        active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

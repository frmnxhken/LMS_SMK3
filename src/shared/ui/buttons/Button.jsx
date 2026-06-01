import React from "react";
import { CgSpinner } from "react-icons/cg";

const variants = {
  primary: "bg-primary text-white hover:bg-blue-600",
  success: "bg-green-600 text-white hover:bg-green-700",
  danger: "bg-rose-600 text-white hover:bg-rose-700",
  secondary: "bg-gray-100 text-black hover:bg-gray-200",
  outline:
    "bg-transparent border border-app-border text-black hover:bg-gray-100",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  isLoading = false,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`
        inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2 rounded-md transition
        ${variants[variant]}
        ${isLoading ? "opacity-70 cursor-not-allowed" : ""} 
        ${className}
      `}
    >
      {isLoading && <CgSpinner className="animate-spin h-4 w-4" />}
      {children}
    </button>
  );
};

export default Button;

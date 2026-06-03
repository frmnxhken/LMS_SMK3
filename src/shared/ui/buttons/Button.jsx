import React from "react";
import { CgSpinner } from "react-icons/cg";

const variants = {
  primary: "bg-slate-900 text-white hover:bg-slate-800",
  success: "bg-emerald-600 text-white hover:bg-emerald-700",
  danger: "bg-rose-600 text-white hover:bg-rose-700",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  outline:
    "border border-slate-200 bg-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900",
  ghost: "hover:bg-slate-100 transition-colors",
  table:
    "p-2 hover:bg-slate-100 text-slate-500 hover:text-slate-900 rounded-md",
};

const sizes = {
  md: "px-4 py-2 text-sm",
  sm: "px-2.5 py-1.5 text-xs",
  icon: "p-1.5 text-sm",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  isLoading = false,
  disabled,
  size = "sm",
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`
        inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2 rounded-md transition
        ${sizes[size]}
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

import React from "react";

const Badge = ({ variant = "primary", label }) => {
  const variants = {
    primary: "bg-blue-50 text-primary",
    warning: "bg-orange-50 text-orange-600",
    success: "bg-green-50 text-green-600",
    dark: "bg-gray-200 text-gray-600",
  };
  return (
    <span
      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${variants[variant]}`}
    >
      {label}
    </span>
  );
};

export default Badge;

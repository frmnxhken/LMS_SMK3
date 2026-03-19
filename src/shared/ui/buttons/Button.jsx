import React from "react";

const variants = {
  primary: "bg-primary text-white hover:bg-blue-600",
  secondary: "bg-gray-100 text-black hover:bg-gray-200",
  outline:
    "bg-transparent border border-app-border text-black hover:bg-gray-100",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`
        w-auto text-sm font-semibold px-4 py-2 rounded-md transition
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;

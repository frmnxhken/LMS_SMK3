import React from "react";

const Badge = ({ variant = "primary", label }) => {
  const variants = {
    primary: "bg-slate-100 text-slate-700 border border-slate-200",
    warning: "bg-amber-50 text-amber-700 border border-amber-200",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    danger: "bg-rose-50 text-rose-700 border border-rose-200",
    info: "bg-blue-50 text-blue-700 border border-blue-200",
  };
  return (
    <span
      className={`inline-flex text-[8px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-lg ${variants[variant]}`}
    >
      {label}
    </span>
  );
};

export default Badge;

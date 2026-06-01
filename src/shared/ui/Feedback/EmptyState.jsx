import React from "react";
import { FiInbox } from "react-icons/fi";

const EmptyState = ({
  title = "Belum Ada Data",
  description = "Data tidak ada di dalam sistem.",
  icon: Icon = FiInbox,
  action = null,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-8 ${className}`}
    >
      <div className="text-slate-300 mb-3">
        <Icon className="w-12 h-12 stroke-[1.5]" />
      </div>

      <div className="space-y-1 max-w-sm mx-auto">
        <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
        <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
      </div>

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
};

export default EmptyState;

import React from "react";
import {
  HiCheckCircle,
  HiXCircle,
  HiExclamationTriangle,
  HiInformationCircle,
} from "react-icons/hi2";

const TOAST_CONFIG = {
  success: {
    icon: HiCheckCircle,
    bg: "bg-emerald-500",
    text: "text-emerald-500",
  },
  error: { icon: HiXCircle, bg: "bg-rose-500", text: "text-rose-500" },
  warning: {
    icon: HiExclamationTriangle,
    bg: "bg-yellow-500",
    text: "text-yellow-500",
  },
  info: { icon: HiInformationCircle, bg: "bg-blue-500", text: "text-blue-500" },
};

const Toast = ({ toast }) => {
  const config = TOAST_CONFIG[toast.type];
  const Icon = config.icon;

  return (
    <div className="min-w-[300px] overflow-hidden rounded-lg shadow-xs bg-white border border-app-border p-4 relative">
      <div className="flex items-center gap-2">
        <Icon size={20} className={`text-2xl ${config.text}`} />
        <p className="font-medium text-sm border-l border-app-border pl-2">
          {toast.message}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full">
        <div
          className={`h-full ${config.bg}`}
          style={{
            width: "100%",
            animation: "shrink 3s linear forwards",
          }}
        />
      </div>
    </div>
  );
};

export default Toast;

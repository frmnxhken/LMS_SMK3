import React from "react";

const StatCard = ({ title, value, icon: Icon, iconColor }) => (
  <div className="bg-app-surface border border-app-border p-5 rounded-xl transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 rounded-xl bg-app-bg">
        <Icon className={`text-2xl ${iconColor || "text-primary"}`} />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted bg-app-bg px-2 py-1 rounded-md">
        Saat Ini
      </span>
    </div>
    <div>
      <p className="text-sm font-semibold text-text-body">{title}</p>
      <div className="flex items-baseline gap-1">
        <h3 className="text-2xl font-bold text-text-heading mt-1">{value}</h3>
        {title === "Kehadiran" && (
          <span className="text-xs text-primary font-medium">Hadir</span>
        )}
      </div>
    </div>
  </div>
);

export default StatCard;

import React from "react";
import Badge from "../Feedback/Badge";

const StatCard = ({ title, value, icon: Icon, iconColor, iconBgColor }) => {
  return (
    <div className="bg-app-surface border border-app-border p-5 rounded-xl transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${iconBgColor}`}>
          <Icon
            className={`text-lg sm:text-2xl ${iconColor || "text-primary"}`}
          />
        </div>
        <Badge label="Saat ini" />
      </div>
      <div>
        <p className="text-sm font-semibold text-text-body">{title}</p>
        <div className="flex items-baseline gap-1">
          <h3 className="text-2xl font-bold text-text-heading mt-1">
            {value ? value : "-"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StatCard;

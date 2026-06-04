import React from "react";
import Badge from "@/shared/ui/Feedback/Badge";

const AcademicCalendarItem = ({ day }) => {
  return (
    <div
      key={day.date}
      className={`min-h-[120px] p-2 border transition-all ${
        day.isSchoolDay
          ? "bg-white border-app-border hover:border-black"
          : "bg-slate-100/50 border-app-border"
      }`}
    >
      <span
        className={`text-sm font-semibold ${
          day.isSchoolDay ? "text-primary" : "text-text-muted"
        }`}
      >
        {day.date}
      </span>

      <div className="mt-2">
        {day.id ? (
          day.isSchoolDay ? (
            <Badge label={day.description} />
          ) : (
            <Badge variant="success" label={day.description} />
          )
        ) : null}
      </div>
    </div>
  );
};

export default AcademicCalendarItem;

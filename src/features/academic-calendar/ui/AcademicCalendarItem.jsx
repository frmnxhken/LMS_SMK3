import React from "react";
import Badge from "@/shared/ui/Feedback/Badge";

const AcademicCalendarItem = ({ day }) => {
  return (
    <div
      key={day.date}
      className={`min-h-[120px] p-2 border transition-all ${
        day.isSchoolDay
          ? "bg-white border-app-border hover:border-black"
          : "bg-gray-50 border-app-border"
      }`}
    >
      <span
        className={`text-sm font-semibold ${
          day.isSchoolDay ? "text-gray-700" : "text-gray-400"
        }`}
      >
        {day.date}
      </span>

      <div className="mt-2">
        {day.isSchoolDay ? (
          <Badge label="Pembelajaran" />
        ) : (
          <Badge variant="success" label={day.description} />
        )}
      </div>
    </div>
  );
};

export default AcademicCalendarItem;

import React, { useState } from "react";
import { dayNames as days, monthNames } from "@/shared/lib/Constants";
import AcademicCalendarItem from "../ui/AcademicCalendarItem";
import data from "@/shared/data/dummy/calendar.json";
import AcademicCalendarNav from "../ui/AcademicCalendarNav";

const AcademicCalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const calendarMap = new Map(data.map((item) => [item.date, item]));
  const monthName = monthNames[month];

  const totalDays = new Date(year, month + 1, 0).getDate();
  const offset = new Date(year, month, 1).getDay();
  const pad = (n) => String(n).padStart(2, "0");
  const formatDate = (date) =>
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

  const calendarDays = Array.from({ length: totalDays }, (_, i) => {
    const d = i + 1;
    const dateObj = new Date(year, month, d);
    const isWeekend = dateObj.getDay() === 0 || dateObj.getDay() === 6;
    const isoDate = formatDate(dateObj);
    const apiItem = calendarMap.get(isoDate);

    return {
      id: apiItem?.id,
      date: d,
      isSchoolDay: isWeekend ? false : (apiItem?.is_school_day ?? true),
      description: isWeekend ? "Libur Akhir Pekan" : apiItem?.description || "",
    };
  });

  const nextMonth = () => {
    setCurrentDate((prev) => {
      const d = new Date(prev);
      d.setMonth(d.getMonth() + 1);
      return d;
    });
  };

  const prevMonth = () => {
    setCurrentDate((prev) => {
      const d = new Date(prev);
      d.setMonth(d.getMonth() - 1);
      return d;
    });
  };

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      <h1 className="text-lg font-semibold pb-6 text-text-heading">
        Kalender Akademik
      </h1>

      <div className="border border-app-border p-4 rounded-xl h-full">
        <AcademicCalendarNav
          prevMonth={prevMonth}
          nextMonth={nextMonth}
          monthName={monthName}
        />

        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-7 mb-2 border-b border-app-border pb-2">
              {days.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-semibold text-text-muted"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7">
              {Array.from({ length: offset }).map((_, index) => (
                <div key={`empty-${index}`} className="min-h-[120px]" />
              ))}

              {calendarDays.map((day) => (
                <AcademicCalendarItem day={day} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendarPage;

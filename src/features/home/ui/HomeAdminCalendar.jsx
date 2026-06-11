import React from "react";

const HomeAdminCalendar = ({ calendars }) => {
  const today = new Date().toISOString().split("T")[0];

  const formatter = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div>
      <ul className="border border-app-border rounded-xl divide-y divide-app-border overflow-hidden bg-white">
        {calendars?.map((calendar) => {
          const isToday = calendar.date === today;
          const date = new Date(calendar.date);

          return (
            <li
              key={calendar.id}
              className="px-6 py-4 transition-colors hover:bg-slate-50"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0
                  ${
                    isToday
                      ? "bg-primary text-white"
                      : !calendar.is_school_day
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-100 text-text-heading"
                  }`}
                >
                  <span className="text-md sm:text-lg font-bold">
                    {String(date.getDate()).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="text-sm sm:text-lg font-semibold text-text-heading">
                      {isToday ? "Hari Ini" : formatter.format(date)}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-text-muted truncate">
                    {calendar.description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeAdminCalendar;

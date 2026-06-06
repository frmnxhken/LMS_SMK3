import React from "react";

const HomeAdminCalendar = () => {
  return (
    <div>
      <ul className="border border-app-border rounded-xl divide-y divide-app-border overflow-hidden bg-white">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => {
          const isToday = i === 1;
          const isHolliday = i === 4;

          return (
            <li
              key={i}
              className="px-6 py-4 transition-colors hover:bg-slate-50"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0 
            ${isToday ? "bg-primary text-white shadow-lg" : isHolliday ? "bg-emerald-500 text-white" : "bg-slate-100 text-text-heading"}`}
                >
                  <span className="text-xs font-semibold opacity-80">JUN</span>
                  <span className="text-lg font-bold">{10 + i}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="font-semibold text-text-heading">
                      {isToday ? "Hari Ini" : `Minggu, ${10 + i} Juni`}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-text-muted truncate">
                    {i === 1
                      ? "Ujian Tengah Semester"
                      : "Kegiatan Belajar Mengajar"}
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

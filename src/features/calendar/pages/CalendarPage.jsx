import React, { useState, useEffect } from "react";
import tasks from "@/shared/data/dummy/tasks.json";
import { monthNames, dayNames } from "@/shared/lib/Constants";

const CalendarPage = () => {
  const [dates, setDates] = useState([]);
  const today = new Date().getDay();
  console.log(tasks);

  useEffect(() => {
    const todayDate = new Date();
    const days = [];
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(todayDate);
      nextDay.setDate(todayDate.getDate() + i);
      days.push({
        date: nextDay.getDate(),
        day: nextDay.getDay(),
        month: nextDay.getMonth(),
        year: nextDay.getFullYear(),
      });
    }
    setDates(days);
  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
  };

  const getTasksForDate = (day) => {
    const formattedDay = formatDate(new Date(day.year, day.month, day.date));
    const filteredTasks = tasks.filter(
      (task) => formatDate(task.due) === formattedDay,
    );

    return filteredTasks;
  };

  return (
    <div className="p-6">
      <h1 className="text-lg font-bold text-center mb-4">
        {monthNames[dates[0]?.month]} {dates[0]?.year}
      </h1>

      <div className="flex flex-nowrap mt-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-50">
        {dates.map((day, index) => (
          <div
            key={index}
            className="p-4 flex-1 basis-1/7 border border-app-border rounded-xl text-center min-w-[150px] sm:min-w-[100px] min-h-[75vh]"
          >
            <p className="text-xs sm:text-sm text-text-muted">
              {dayNames[day.day]}
            </p>
            <div
              className={`${today === day.day ? "bg-black text-white rounded-lg" : ""}`}
            >
              <p className="text-lg sm:text-2xl font-semibold">{day.date}</p>
            </div>
            <div className="space-y-1 py-6">
              {getTasksForDate(day).map((task, index) => (
                <div
                  className={`p-2 rounded-lg text-sm ${task.color} text-white`}
                  key={index}
                >
                  {task.task.slice(0, 20) + "..."}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;

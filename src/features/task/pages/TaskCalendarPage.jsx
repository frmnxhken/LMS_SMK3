import React from "react";
import { monthNames, dayNames } from "@/shared/lib/Constants";
import TaskToDo from "../ui/TaskToDo";
import useTaskCalendar from "../hooks/useTaskCalendar";
import useTask from "../hooks/useTask";
import TaskCalendarControl from "../ui/TaskCalendarControl";

const TaskCalendarPage = () => {
  const today = new Date().toDateString();
  const { data, isLoading } = useTask();
  const { dates, getTasksForDate, nextWeek, prevWeek } = useTaskCalendar(data);

  return (
    <div className="p-6">
      <h1 className="text-lg font-bold text-center">
        {dates.length > 0 && `${monthNames[dates[0].month]} ${dates[0].year}`}
      </h1>

      <TaskCalendarControl nextWeek={nextWeek} prevWeek={prevWeek} />

      <div className="flex flex-nowrap overflow-x-auto">
        {dates.map((day, index) => {
          const isToday =
            new Date(day.year, day.month, day.date).toDateString() === today;
          const tasksForDay = getTasksForDate(day);

          return (
            <div
              key={index}
              className="p-4 flex-1 border border-app-border rounded-xl min-w-[150px] min-h-[75vh]"
            >
              <p className="text-center text-sm">{dayNames[day.day]}</p>
              <div
                className={`text-center ${isToday ? "bg-black text-white rounded-lg" : ""}`}
              >
                <p className="text-2xl font-semibold">{day.date}</p>
              </div>

              <div className="space-y-2 py-4">
                {tasksForDay?.map((task) => (
                  <TaskToDo task={task} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskCalendarPage;

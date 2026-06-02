import { useEffect, useState } from "react";

const useTaskCalendar = (data) => {
  const [dates, setDates] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(startDate);
      nextDay.setDate(startDate.getDate() + i);
      days.push({
        date: nextDay.getDate(),
        day: nextDay.getDay(),
        month: nextDay.getMonth(),
        year: nextDay.getFullYear(),
      });
    }
    setDates(days);
  }, [startDate]);

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
      2,
      "0",
    )}-${String(d.getDate()).padStart(2, "0")}`;
  };

  const getTasksForDate = (day) => {
    const formattedDay = formatDate(new Date(day.year, day.month, day.date));
    return data?.data?.filter((task) => formatDate(task.due) === formattedDay);
  };

  const nextWeek = () => {
    setStartDate((prev) => {
      const next = new Date(prev);
      next.setDate(next.getDate() + 7);
      return next;
    });
  };

  const prevWeek = () => {
    setStartDate((prev) => {
      const next = new Date(prev);
      next.setDate(next.getDate() - 7);
      return next;
    });
  };

  return {
    dates,
    getTasksForDate,
    nextWeek,
    prevWeek,
  };
};

export default useTaskCalendar;

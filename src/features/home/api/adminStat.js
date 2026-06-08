import api from "@/shared/api/ApiClient";

export const getAdminStat = async () => {
  const res = await api.get("/admin/stat");
  return res.data;
};

export const getWeeklyCalendar = async () => {
  const res = await api.get("/admin/calendar/weekly");
  return res.data;
};

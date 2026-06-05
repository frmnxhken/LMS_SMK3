import api from "@/shared/api/ApiClient";

export const getAcademicCalendar = async () => {
  const res = await api.get("/admin/calendar");
  return res.data;
};

export const updateAcademicCalendar = async (id, payload) => {
  const res = await api.put(`/admin/calendar/${id}`, payload);
  return res;
};

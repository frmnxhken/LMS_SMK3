import api from "@/shared/api/ApiClient";

export const getGradeHistory = async () => {
  const res = await api.get("/grade/history");
  return res.data;
};

export const getGradeHistorySubject = async (id) => {
  const res = await api.get(`/grade/${id}`);
  return res.data;
};

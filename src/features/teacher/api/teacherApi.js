import api from "@/shared/api/ApiClient";

export const getTeachers = async () => {
  const res = await api.get("/admin/teacher");
  return res.data;
};

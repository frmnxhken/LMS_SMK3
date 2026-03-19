import api from "@/shared/api/ApiClient";

export const getCourses = async () => {
  const res = await api.get("/class");
  return res.data;
};

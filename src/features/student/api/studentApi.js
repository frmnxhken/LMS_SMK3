import api from "@/shared/api/ApiClient";

export const getClasses = async () => {
  const res = await api.get("/admin/classes");
  return res.data;
};

export const getStudents = async () => {
  const res = await api.get("/admin/student");
  return res.data;
};

export const createStudent = async (payload) => {
  const res = await api.post("/admin/student", payload);
  return res.data;
};

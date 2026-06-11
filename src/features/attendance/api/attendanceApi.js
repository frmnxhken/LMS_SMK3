import api from "@/shared/api/ApiClient";

export const getAttendance = async () => {
  const res = await api.get("/attendance");
  return res.data;
};

export const createAttendance = async (data) => {
  const res = await api.post("/attendance/check-in", data);
  return res;
};

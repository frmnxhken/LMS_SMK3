import api from "@/shared/api/ApiClient";

export const createAttendance = async (data) => {
  const res = await api.post("/attendance/check-in", data);
  return res;
};

import api from "@/shared/api/ApiClient";

export const getReportToday = async (page, status, search) => {
  const res = await api.get("/admin/attendance-report/today", {
    params: { page, status, search },
  });
  return res.data;
};

export const getTodaySummary = async () => {
  const res = await api.get("/admin/attendance-report/summary");
  return res.data;
};

export const getReportHistory = async (
  page,
  status,
  start_date,
  end_date,
  search,
) => {
  const res = await api.get("/admin/attendance-report/history", {
    params: { page, status, start_date, end_date, search },
  });
  return res.data;
};

export const updateAttendance = async (payload) => {
  const res = await api.put("/admin/attendance", payload);
  return res;
};

export const exportAttendance = async (payload) => {
  const res = await api.post("/admin/attendance-report/export", payload, {
    responseType: "blob",
  });
  return res.data;
};

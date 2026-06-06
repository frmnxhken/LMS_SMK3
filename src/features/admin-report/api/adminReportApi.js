import api from "@/shared/api/ApiClient";

export const getReportToday = async (page, status, search) => {
  const res = await api.get("/admin/attendance-report/today", {
    params: { page, status, search },
  });
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

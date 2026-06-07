import api from "@/shared/api/ApiClient";

export const getReport = async (id_class) => {
  const res = await api.get(`/class/${id_class}/report`);
  return res.data;
};

export const getReportStudent = async (id_class, id_student) => {
  const res = await api.get(`/class/${id_class}/report/${id_student}`);
  return res.data;
};

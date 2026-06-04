import api from "@/shared/api/ApiClient";

export const getReport = async (id_class) => {
  const res = await api.get(`/class/${id_class}/report`);
  return res.data;
};

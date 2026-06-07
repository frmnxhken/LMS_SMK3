import api from "@/shared/api/ApiClient";

export const getWeightScore = async (id_class) => {
  const res = await api.get(`/class/${id_class}/weight-score`);
  return res.data;
};

export const updateWeightScore = async (id_class, payload) => {
  const res = await api.put(`/class/${id_class}/weight-score`, payload);
  return res;
};

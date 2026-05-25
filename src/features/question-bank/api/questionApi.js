import api from "@/shared/api/ApiClient";

export const getQuestion = async () => {
  const res = await api.get("/exam");
  return res.data;
};

export const detailQuestion = async (id) => {
  const res = await api.get(`/exam/${id}`);
  return res.data;
};

export const createQuestion = async (payload) => {
  const res = await api.post("/exam", payload);
  return res;
};

export const updateQuestion = async (id, payload) => {
  const res = await api.put(`/exam/${id}`, payload);
  return res;
};

export const deleteQuestion = async (id) => {
  const res = await api.delete(`/exam/${id}`);
  return res;
};

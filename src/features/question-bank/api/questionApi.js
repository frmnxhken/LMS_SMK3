import api from "@/shared/api/ApiClient";

export const getQuestion = async () => {
  const res = await api.get("/exam");
  return res.data;
};

export const storeQuestion = async (payload) => {
  const res = await api.post("/exam", payload);
  return res;
};

export const getDetailQuestion = async (id) => {
  const res = await api.get(`/exam/${id}/question`);
  return res.data;
};

export const createQuestion = async (id, payload) => {
  const res = await api.post(`/exam/${id}/question`, { questions: payload });
  return res;
};

export const updateQuestion = async (id, payload) => {
  const res = await api.put(`/exam/question/${id}`, payload);
  return res;
};

export const deleteQuestion = async (id, payload) => {
  const res = await api.delete(`/exam/question/${id}`, { questions: payload });
  return res;
};

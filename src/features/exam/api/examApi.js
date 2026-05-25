import api from "@/shared/api/ApiClient";

export const getExamDetail = async (id_class, id_exam) => {
  const res = await api.get(`/class/${id_class}/exam/${id_exam}/detail`);
  return res.data;
};

export const getExamQuestion = async (id_class, id_exam) => {
  const res = await api.get(`/class/${id_class}/exam/${id_exam}/question`);
  return res.data;
};

export const startExam = async (id_class, id_exam) => {
  const res = await api.put(`/class/${id_class}/exam/${id_exam}/start`);
  return res;
};

export const submitExam = async (id_class, id_exam, payload) => {
  const res = await api.put(
    `/class/${id_class}/exam/${id_exam}/submit`,
    payload,
  );
  return res;
};

import api from "@/shared/api/ApiClient";

export const getExamAssignment = async (id_class) => {
  const res = await api.get(`/class/${id_class}/exam`);
  return res.data;
};

export const getExamAssignmentDetail = async (id_class, id_exam) => {
  const res = await api.get(`/class/${id_class}/exam/${id_exam}`);
  return res.data;
};

export const createExamAssignment = async (id_class, payload) => {
  const res = await api.post(`/class/${id_class}/exam`, payload);
  return res;
};

export const updateExamAssignment = async (id_class, id_exam, payload) => {
  const res = await api.put(`/class/${id_class}/exam/${id_exam}`, payload);
  return res;
};

export const deleteExamAssignment = async (id_class, id_exam) => {
  const res = await api.delete(`/class/${id_class}/exam/${id_exam}`);
  return res;
};

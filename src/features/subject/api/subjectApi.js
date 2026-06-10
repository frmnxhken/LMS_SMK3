import api from "@/shared/api/ApiClient";

export const getSubjects = async () => {
  const res = await api.get("/admin/subject");
  return res.data;
};

export const getSubjectList = async () => {
  const res = await api.get("/admin/subject/list");
  return res.data;
};

export const storeSubject = async (payload) => {
  const res = await api.post("/admin/subject", payload, {
    headers: { "Content-Type": "application/json" },
  });
  return res;
};

export const updateSubject = async (id, payload) => {
  const res = await api.put(`/admin/subject/${id}`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return res;
};

export const deleteSubject = async (id) => {
  const res = await api.delete(`/admin/subject/${id}`);
  return res;
};

import api from "@/shared/api/ApiClient";

export const getStudents = async (page, filter = "") => {
  const res = await api.get(`/admin/student?page=${page}&filter=${filter}`);
  return res.data;
};

export const getStudentDetail = async (id) => {
  const res = await api.get(`/admin/student/${id}`);
  return res.data;
};

export const storeStudent = async (payload) => {
  const res = await api.post("/admin/student", payload);
  return res.data;
};

export const updateStudent = async (id, payload) => {
  const res = await api.put(`/admin/student/${id}`, payload);
  return res.data;
};

export const importStudents = async (payload) => {
  const res = await api.post("/admin/student/import", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

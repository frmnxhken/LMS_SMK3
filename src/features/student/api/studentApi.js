import api from "@/shared/api/ApiClient";

export const getStudents = async (page, filter = "", search = "") => {
  const res = await api.get("/admin/student", {
    params: {
      page,
      filter,
      search,
    },
  });
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

export const deleteStudent = async (id) => {
  const res = await api.delete(`/admin/student/${id}`);
  return res;
};

export const importStudents = async (payload) => {
  const res = await api.post("/admin/student/import", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const exportStudents = async (id = null) => {
  const res = await api.get("/admin/student/export", {
    params: {
      school_class_id: id,
    },
    responseType: "blob",
  });

  return res.data;
};

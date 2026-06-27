import api from "@/shared/api/ApiClient";

export const getTeachers = async (page, search = "") => {
  const res = await api.get("/admin/teacher", {
    params: {
      page,
      search,
    },
  });
  return res.data;
};

export const getTeacherList = async () => {
  const res = await api.get("/admin/teacher/list");
  return res.data;
};

export const getTeacherDetail = async (id) => {
  const res = await api.get(`/admin/teacher/${id}`);
  return res.data;
};

export const storeTeacher = async (payload) => {
  const res = await api.post("/admin/teacher", payload);
  return res;
};

export const updateTeacher = async (id, payload) => {
  const res = await api.put(`/admin/teacher/${id}`, payload);
  return res.data;
};

export const deleteTeacher = async (id) => {
  const res = await api.delete(`/admin/teacher/${id}`);
  return res.data;
};

export const resetPassword = async (id) => {
  const res = await api.post(`/admin/teacher/${id}/reset-password`);
  return res.data;
};

export const importTeachers = async (payload) => {
  const res = await api.post("/admin/teacher/import", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const exportTeachers = async () => {
  const res = await api.get("/admin/teacher/export", {
    responseType: "blob",
  });

  return res.data;
};

import api from "@/shared/api/ApiClient";

export const getListAcademicYears = async () => {
  const res = await api.get("/admin/academic");
  return res.data;
};

export const createAcademicYear = async (data) => {
  const res = await api.post("/admin/academic", data);
  return res;
};

export const getDetailAcademicYear = async (id) => {
  const res = await api.get(`/admin/academic/${id}`);
  return res.data;
};

export const updateAcademicYear = async (id, data) => {
  const res = await api.put(`/admin/academic/${id}`, data);
  return res;
};

export const deleteAcademicYear = async (id) => {
  const res = await api.delete(`/admin/academic/${id}`);
  return res;
};

export const activateAcademicYear = async (id) => {
  const res = await api.put(`/admin/academic/${id}/activate`);
  return res;
};

export const updateAcademicYearStatus = async (id, status) => {
  const res = await api.put(`/admin/academic/${id}/status`, { status });
  return res.data;
};

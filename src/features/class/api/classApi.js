import api from "@/shared/api/ApiClient";

export const getClasses = async () => {
  const res = await api.get("/admin/class");
  return res.data;
};

export const getClassList = async () => {
  const res = await api.get("/admin/class/list");
  return res.data;
};

export const getDetailClass = async (id) => {
  const res = await api.get(`/admin/class/${id}`);
  return res.data;
};

export const storeClass = async (payload) => {
  const res = await api.post("/admin/class", payload, {
    headers: { "Content-Type": "application/json" },
  });
  return res;
};

export const updateClass = async (id, payload) => {
  const res = await api.put(`/admin/class/${id}`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return res;
};

export const deleteClass = async (id) => {
  const res = await api.delete(`/admin/class/${id}`);
  return res;
};

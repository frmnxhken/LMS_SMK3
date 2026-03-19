import api from "@/shared/api/ApiClient";

export const createMaterial = async (id_class, payload) => {
  const res = await api.post(`/class/${id_class}/material`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateMaterial = async (id_class, id_post, payload) => {
  const res = await api.post(
    `/class/${id_class}/material/${id_post}`,
    payload,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
};

export const deleteFile = async (id) => {
  const res = await api.delete(`/file/${id}`);
  return res;
};

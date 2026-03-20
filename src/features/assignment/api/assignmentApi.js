import api from "@/shared/api/ApiClient";

export const createAssignment = async (id_class, payload) => {
  const res = await api.post(`/class/${id_class}/assignment`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateAssignment = async (id_class, id_post, payload) => {
  const res = await api.post(
    `/class/${id_class}/assignment/${id_post}`,
    payload,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
};

export const getAssignmentList = async (id_class) => {
  const res = await api.get(`/class/${id_class}/assignment`);
  return res.data;
};

export const deleteFile = async (id) => {
  const res = await api.delete(`/file/${id}`);
  return res;
};

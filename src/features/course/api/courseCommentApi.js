import api from "@/shared/api/ApiClient";

export const getComments = async (id_class, id_post) => {
  const res = await api.get(`/class/${id_class}/post/${id_post}/comment`);
  return res.data;
};

export const storeComment = async (id_class, id_post, payload) => {
  const res = await api.post(
    `/class/${id_class}/post/${id_post}/comment`,
    payload,
  );
  return res;
};

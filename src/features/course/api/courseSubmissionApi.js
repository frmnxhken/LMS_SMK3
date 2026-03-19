import api from "@/shared/api/ApiClient";

export const storeSubmission = async (id_class, id_post, payload) => {
  const res = await api.post(
    `/class/${id_class}/post/${id_post}/submission`,
    payload,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return res;
};

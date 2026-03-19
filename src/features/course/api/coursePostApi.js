import api from "@/shared/api/ApiClient";

export const getCoursePosts = async (id_class) => {
  const res = await api.get("/class/" + id_class);
  return res.data;
};

export const getCoursePostDetail = async (id_class, id_post) => {
  const res = await api.get(`/class/${id_class}/post/${id_post}`);
  return res.data;
};

export const deleteCoursePost = async (id_class, id_post) => {
  const res = await api.delete(`/class/${id_class}/post/${id_post}`);
  return res;
};

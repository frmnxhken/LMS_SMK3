import api from "@/shared/api/ApiClient";

export const getMemberList = async (id_class) => {
  const res = await api.get(`/class/${id_class}/member`);
  return res.data;
};

import api from "@/shared/api/ApiClient";

export const getTasks = async () => {
  const res = await api.get("/assignment");
  return res.data;
};

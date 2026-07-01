import api from "@/shared/api/ApiClient";

export const getSetting = async () => {
  const res = await api.get("/admin/setting");
  return res.data;
};

export const upsertSetting = async (data) => {
  const res = await api.post("/admin/setting", data);
  return res;
};

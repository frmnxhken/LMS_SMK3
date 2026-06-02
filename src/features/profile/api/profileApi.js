import api from "@/shared/api/ApiClient";

export const updatePassword = async (payload) => {
  const res = await api.put("/user/change-password", payload, {
    headers: { "Content-Type": "application/json" },
  });
  return res;
};

export const updatePhotoProfile = async (payload) => {
  const res = await api.post("/user/change-photo", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};

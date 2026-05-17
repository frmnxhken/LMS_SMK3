import api from "@/shared/api/ApiClient";

export const getTeachingAssignments = async () => {
  const res = await api.get("/admin/teaching-assignment");
  return res.data;
};

export const createTeachingAssignment = async (payload) => {
  const res = await api.post("/admin/teaching-assignment", payload, {
    headers: {
      "Content-Type": "appliction/json",
    },
  });
  return res.data;
};

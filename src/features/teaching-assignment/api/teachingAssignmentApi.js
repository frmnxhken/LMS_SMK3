import api from "@/shared/api/ApiClient";

export const getTeachingAssignments = async (
  page,
  school_class = "",
  subject = "",
) => {
  const res = await api.get("/admin/teaching-assignment", {
    params: {
      page,
      school_class,
      subject,
    },
  });
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

export const getTeachingAssignmentDetail = async (id) => {
  const res = await api.get(`/admin/teaching-assignment/${id}`);
  return res.data;
};

export const updateTeachingAssignment = async (id, payload) => {
  const res = await api.put(`/admin/teaching-assignment/${id}`, payload);
  return res.data;
};

export const deleteTeachingAssignment = async (id) => {
  const res = await api.delete(`/admin/teaching-assignment/${id}`);
  return res.data;
};

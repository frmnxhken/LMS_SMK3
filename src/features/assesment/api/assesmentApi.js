import api from "@/shared/api/ApiClient";

export const getlistSubmissionStudent = async (id_class, id_post) => {
  const res = await api.get(`/class/${id_class}/assesment/${id_post}`);
  return res.data;
};

export const getDetailSubmission = async (id_class, id_submission) => {
  const res = await api.get(
    `/class/${id_class}/assesment/${id_submission}/submission`,
  );
  return res.data;
};

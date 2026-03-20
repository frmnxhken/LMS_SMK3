import { useQuery } from "@tanstack/react-query";
import { getlistSubmissionStudent } from "../api/assessmentApi";

const useAssessment = (id_class, id_post) => {
  return useQuery({
    queryKey: ["assesmentList", id_class, id_post],
    queryFn: ({ queryKey }) => {
      const [_, idClass, idPost] = queryKey;
      return getlistSubmissionStudent(idClass, idPost);
    },
    staleTime: 1000 * 60 * 3,
  });
};

export default useAssessment;

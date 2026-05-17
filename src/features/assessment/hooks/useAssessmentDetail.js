import { useQuery } from "@tanstack/react-query";
import { getDetailSubmission } from "../api/assessmentApi";

const useAssessmentDetail = (id_class, id_submission) => {
  return useQuery({
    queryKey: ["assesmentDetail", id_class, id_submission],
    queryFn: ({ queryKey }) => {
      const [_, idClass, idSubmission] = queryKey;
      return getDetailSubmission(idClass, idSubmission);
    },
  });
};

export default useAssessmentDetail;

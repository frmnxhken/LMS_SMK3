import { useQuery } from "@tanstack/react-query";
import { detailQuestion } from "../api/questionApi";

const useQuestionDetail = (id) => {
  return useQuery({
    queryKey: ["question", id],
    queryFn: () => detailQuestion(id),
    staleTime: 1000 * 60 * 10,
    enabled: !!id,
    select: (data) => data.data,
  });
};

export default useQuestionDetail;

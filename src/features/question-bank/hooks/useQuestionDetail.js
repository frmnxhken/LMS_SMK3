import { useQuery } from "@tanstack/react-query";
import { getDetailQuestion } from "../api/questionApi";

const useQuestionDetail = (id) => {
  return useQuery({
    queryKey: ["question", id],
    queryFn: () => getDetailQuestion(id),
  });
};

export default useQuestionDetail;

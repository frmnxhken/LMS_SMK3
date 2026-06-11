import { useQuery } from "@tanstack/react-query";
import { getDetailQuestion } from "../api/quizBuilderApi";

const useQuizBuilderDetail = (id) => {
  return useQuery({
    queryKey: ["question", id],
    queryFn: () => getDetailQuestion(id),
    staleTime: 1000 * 60 * 10,
  });
};

export default useQuizBuilderDetail;

import { useQuery } from "@tanstack/react-query";
import { getQuestion } from "../api/questionApi";

const useQuestion = () => {
  return useQuery({
    queryKey: ["questions"],
    queryFn: getQuestion,
    select: (data) => data.data,
    staleTime: 1000 * 60 * 10,
  });
};

export default useQuestion;

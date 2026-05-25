import { useQuery } from "@tanstack/react-query";
import { getExamQuestion } from "../api/examApi";

const useExamQuestion = (id_class, id_exam) => {
  return useQuery({
    queryKey: ["examQuestion", id_class, id_exam],
    queryFn: () => getExamQuestion(id_class, id_exam),
    enabled: !!id_exam && !!id_class,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 60,
    retry: (failureCount, error) => {
      if (error?.response?.status === 403 || error?.response?.status === 404)
        return false;
      return failureCount < 3;
    },
  });
};

export default useExamQuestion;

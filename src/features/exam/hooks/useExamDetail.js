import { useQuery } from "@tanstack/react-query";
import { getExamDetail } from "../api/examApi";

const useExamDetail = (id_class, id_exam) => {
  return useQuery({
    queryKey: ["examDetail", id_class, id_exam],
    queryFn: () => getExamDetail(id_class, id_exam),
    staleTime: 1000 * 60 * 3,
    enabled: !!id_exam && !!id_class,
  });
};

export default useExamDetail;

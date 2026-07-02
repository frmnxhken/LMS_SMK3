import { useQuery } from "@tanstack/react-query";
import { getGradeHistorySubject } from "../api/gradeApi";

const useGradeHistorySubject = (id) => {
  return useQuery({
    queryKey: ["grades", id],
    queryFn: () => getGradeHistorySubject(id),
    staleTime: 1000 * 60 * 3,
  });
};

export default useGradeHistorySubject;

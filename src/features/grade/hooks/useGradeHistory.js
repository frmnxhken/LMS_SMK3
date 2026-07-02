import { useQuery } from "@tanstack/react-query";
import { getGradeHistory } from "../api/gradeApi";

const useGradeHistory = () => {
  return useQuery({
    queryKey: ["grades"],
    queryFn: () => getGradeHistory(),
    staleTime: 1000 * 60 * 3,
  });
};

export default useGradeHistory;

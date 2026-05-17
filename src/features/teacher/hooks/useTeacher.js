import { useQuery } from "@tanstack/react-query";
import { getTeachers } from "../api/teacherApi";

const useTeacher = () => {
  return useQuery({
    queryKey: ["teachers"],
    queryFn: () => getTeachers(),
    staleTime: 1000 * 60 * 3,
  });
};

export default useTeacher;

import { useQuery } from "@tanstack/react-query";
import { getExamAssignment } from "../api/examAssignmentApi";

const useExamAssignment = (id_class) => {
  return useQuery({
    queryKey: ["examAssignments", id_class],
    queryFn: () => getExamAssignment(id_class),
    staleTime: 1000 * 60 * 5,
    enabled: !!id_class,
  });
};

export default useExamAssignment;

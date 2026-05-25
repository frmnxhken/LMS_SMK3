import { useQuery } from "@tanstack/react-query";
import { getExamAssignment } from "../api/examAssignmentApi";

const useExamAssignment = (id_class) => {
  return useQuery({
    queryKey: ["examAssignments"],
    queryFn: () => getExamAssignment(id_class),
    staleTime: 1000 * 60 * 10,
    enabled: !!id_class,
  });
};

export default useExamAssignment;

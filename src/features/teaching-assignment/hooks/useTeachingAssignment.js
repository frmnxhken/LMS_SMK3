import { useQuery } from "@tanstack/react-query";
import { getTeachingAssignments } from "../api/teachingAssignmentApi";

const useTeachingAssignment = () => {
  return useQuery({
    queryKey: ["teachingAssignments"],
    queryFn: () => getTeachingAssignments(),
    staleTime: 1000 * 60 * 3,
  });
};

export default useTeachingAssignment;

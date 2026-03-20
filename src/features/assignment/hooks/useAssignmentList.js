import { useQuery } from "@tanstack/react-query";
import { getAssignmentList } from "../api/assignmentApi";

const useAssignmentList = (id_class) => {
  return useQuery({
    queryKey: ["assignmentList", id_class],
    queryFn: ({ queryKey }) => {
      const [_, id] = queryKey;
      return getAssignmentList(id);
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!id_class,
  });
};

export default useAssignmentList;

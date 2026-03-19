import { useQuery } from "@tanstack/react-query";
import { getMemberList } from "../api/memberApi";

const useMembers = (id_class) => {
  return useQuery({
    queryKey: ["members", id_class],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return getMemberList(id);
    },
    staleTime: 1000 * 60 * 10,
    enabled: !!id_class,
  });
};

export default useMembers;

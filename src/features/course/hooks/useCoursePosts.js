import { useQuery } from "@tanstack/react-query";
import { getCoursePosts } from "../api/coursePostApi";

const useCoursePosts = (id_class) => {
  return useQuery({
    queryKey: ["coursePosts", id_class],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return getCoursePosts(id);
    },
    staleTime: 1000 * 60 * 10,
    enabled: !!id_class,
  });
};

export default useCoursePosts;

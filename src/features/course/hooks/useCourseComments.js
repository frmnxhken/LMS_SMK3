import { useQuery } from "@tanstack/react-query";
import { getComments } from "../api/courseCommentApi";

const useCourseComments = (id_class, id_post) => {
  return useQuery({
    queryKey: ["courseComments", id_class, id_post],
    queryFn: ({ queryKey }) => {
      const [, idClass, idPost] = queryKey;
      return getComments(idClass, idPost);
    },
    staleTime: 1000 * 60 * 10,
    enabled: !!id_class,
  });
};

export default useCourseComments;

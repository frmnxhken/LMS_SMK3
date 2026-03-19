import { useQuery } from "@tanstack/react-query";
import { getCoursePostDetail } from "../api/coursePostApi";

const useCoursePostDetail = (id_class, id_post) => {
  return useQuery({
    queryKey: ["coursePostDetail", id_class, id_post],
    queryFn: ({ queryKey }) => {
      const [, idClass, idPost] = queryKey;
      return getCoursePostDetail(idClass, idPost);
    },
    select: (data) => data.data,
    staleTime: 1000 * 60 * 10,
    enabled: !!id_class,
  });
};

export default useCoursePostDetail;

import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../api/courseApi";

const useCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
    select: (data) => data.data,
    staleTime: 1000 * 60 * 10,
  });
};

export default useCourses;

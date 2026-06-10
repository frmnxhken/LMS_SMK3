import { useQuery } from "@tanstack/react-query";
import { getTeacherList } from "../api/teacherApi";

const useTeacherList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["teacherList"],
    queryFn: getTeacherList,
    staleTime: 1000 * 60 * 3,
  });

  return {
    data: data?.data,
    isLoading,
  };
};

export default useTeacherList;

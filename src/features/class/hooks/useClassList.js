import { useQuery } from "@tanstack/react-query";
import { getClassList } from "../api/classApi";

const useClassList = () => {
  return useQuery({
    queryKey: ["classList"],
    queryFn: getClassList,
    staleTime: 1000 * 60 * 3,
  });
};

export default useClassList;

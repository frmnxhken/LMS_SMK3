import { useQuery } from "@tanstack/react-query";
import { getSubjectList } from "../api/subjectApi";

const useSubjectList = () => {
  return useQuery({
    queryKey: ["subjectList"],
    queryFn: getSubjectList,
    staleTime: 1000 * 60 * 3,
  });
};

export default useSubjectList;

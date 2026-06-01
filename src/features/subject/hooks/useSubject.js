import { useQuery } from "@tanstack/react-query";
import { getSubjects } from "../api/subjectApi";

const useSubject = () => {
  return useQuery({
    queryKey: ["subjects"],
    queryFn: getSubjects,
    staleTime: 1000 * 60 * 3,
  });
};

export default useSubject;

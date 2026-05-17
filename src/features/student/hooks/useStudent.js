import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../api/studentApi";

const useStudent = () => {
  return useQuery({
    queryKey: ["students"],
    queryFn: () => getStudents(),
  });
};

export default useStudent;

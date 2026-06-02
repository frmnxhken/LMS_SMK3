import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../api/taskApi";

const useTask = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
    staleTime: 1000 * 60 * 5,
  });
};

export default useTask;

import { useQuery } from "@tanstack/react-query";
import { getClasses } from "../api/classApi";

const useClass = () => {
  return useQuery({
    queryKey: ["classes"],
    queryFn: getClasses,
    staleTime: 1000 * 60 * 3,
  });
};

export default useClass;

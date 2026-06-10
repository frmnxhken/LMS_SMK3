import { useQuery } from "@tanstack/react-query";
import { getAdminStat } from "../api/adminStat";

const useAdminStat = () => {
  return useQuery({
    queryKey: ["adminStat"],
    queryFn: () => getAdminStat(),
    staleTime: 1000 * 60 * 10,
  });
};

export default useAdminStat;

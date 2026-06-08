import { useQuery } from "@tanstack/react-query";
import { getAdminStat } from "../api/adminStat";

const useAdminStat = () => {
  return useQuery({
    queryKey: ["adminStat"],
    queryFn: () => getAdminStat(),
  });
};

export default useAdminStat;

import { useQuery } from "@tanstack/react-query";
import { getWeeklyCalendar } from "../api/adminStat";

const useAdminWeeklyCalendar = () => {
  return useQuery({
    queryKey: ["weeklyCalendar"],
    queryFn: () => getWeeklyCalendar(),
    staleTime: 1000 * 60 * 10,
  });
};

export default useAdminWeeklyCalendar;

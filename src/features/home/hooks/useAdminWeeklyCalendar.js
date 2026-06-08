import { useQuery } from "@tanstack/react-query";
import { getWeeklyCalendar } from "../api/adminStat";

const useAdminWeeklyCalendar = () => {
  return useQuery({
    queryKey: ["weeklyCalendar"],
    queryFn: () => getWeeklyCalendar(),
  });
};

export default useAdminWeeklyCalendar;

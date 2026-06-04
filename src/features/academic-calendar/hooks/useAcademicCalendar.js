import { useQuery } from "@tanstack/react-query";
import { getAcademicCalendar } from "../api/academicCalendarApi";

const useAcademicCalendar = () => {
  return useQuery({
    queryKey: ["calendar"],
    queryFn: getAcademicCalendar,
    staleTime: Infinity,
  });
};

export default useAcademicCalendar;

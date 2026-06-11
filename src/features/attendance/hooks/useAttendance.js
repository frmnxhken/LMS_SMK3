import { useQuery } from "@tanstack/react-query";
import { getAttendance } from "../api/attendanceApi";

const useAttendance = () => {
  return useQuery({
    queryKey: ["attendance"],
    queryFn: () => getAttendance(),
    staleTime: 100 * 60 * 5,
  });
};

export default useAttendance;

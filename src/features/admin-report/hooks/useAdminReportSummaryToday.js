import { useQuery } from "@tanstack/react-query";
import { getTodaySummary } from "../api/adminReportApi";

const useAdminReportSummaryToday = () => {
  return useQuery({
    queryKey: ["attendanceSummmary"],
    queryFn: () => getTodaySummary(),
    staleTime: 1000 * 60 * 5,
  });
};

export default useAdminReportSummaryToday;

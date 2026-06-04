import { useQuery } from "@tanstack/react-query";
import { getReport } from "../api/teacherReportApi";

const useTeacherReport = (id_class) => {
  return useQuery({
    queryKey: ["teacherReport", id_class],
    queryFn: () => getReport(id_class),
    staleTime: 1000 * 60 * 10,
  });
};

export default useTeacherReport;

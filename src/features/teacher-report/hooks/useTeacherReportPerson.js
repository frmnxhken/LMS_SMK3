import { useQuery } from "@tanstack/react-query";
import { getReportStudent } from "../api/teacherReportApi";

const useTeacherReportPerson = (id_class, id_student) => {
  return useQuery({
    queryKey: ["reportPerson", id_class, id_student],
    queryFn: () => getReportStudent(id_class, id_student),
    staleTime: 1000 * 60 * 10,
    enabled: !!id_class && !!id_student,
  });
};

export default useTeacherReportPerson;

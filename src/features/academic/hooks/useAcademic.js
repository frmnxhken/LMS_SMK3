import { useQuery } from "@tanstack/react-query";
import { getListAcademicYears } from "../api/academicApi";

const useAcademic = () => {
  return useQuery({
    queryKey: ["academies"],
    queryFn: () => getListAcademicYears(),
    staleTime: 1000 * 60 * 10,
  });
};

export default useAcademic;

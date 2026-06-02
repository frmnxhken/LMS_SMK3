import { useMutation, useQueryClient } from "@tanstack/react-query";
import { activateAcademicYear } from "../api/academicApi";

const useAcademicActivate = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => activateAcademicYear(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["academies"]);
    },
  });

  const handleActivate = (id) => mutation.mutate(id);

  return { handleActivate };
};

export default useAcademicActivate;

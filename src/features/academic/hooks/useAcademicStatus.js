import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAcademicYearStatus } from "../api/academicApi";

export const useAcademicStatus = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, status }) => updateAcademicYearStatus(id, status),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["academies"],
      });
      queryClient.invalidateQueries(["academic-year"]);
    },
  });

  const handleStatus = (id, status) => {
    mutation.mutate({ id, status });
  };

  return { handleStatus };
};

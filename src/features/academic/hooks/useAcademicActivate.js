import { useMutation, useQueryClient } from "@tanstack/react-query";
import { activateAcademicYear } from "../api/academicApi";
import { useToast } from "@/app/contexts/ToastContext";

const useAcademicActivate = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (id) => activateAcademicYear(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["academies"]);
      queryClient.invalidateQueries(["academic-year"]);
      addToast("Data berhasil diaktivasi!");
    },
  });

  const handleActivate = (id) => mutation.mutate(id);

  return { handleActivate };
};

export default useAcademicActivate;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAcademicYear } from "../api/academicApi";
import { useToast } from "@/app/contexts/ToastContext";

const useAcademicDelete = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (id) => deleteAcademicYear(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["examAssignments"]);
      queryClient.invalidateQueries(["academic-year"]);
      addToast("Data berhasil dihapus!");
    },
  });

  const handleDelete = (id) => {
    let confirmed = confirm("Apakah Anda Yakin ?");
    if (confirmed) {
      mutation.mutate(id);
    }
  };

  return { handleDelete };
};

export default useAcademicDelete;

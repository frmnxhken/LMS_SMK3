import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAcademicYear } from "../api/academicApi";

const useAcademicDelete = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => deleteAcademicYear(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["examAssignments"]);
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

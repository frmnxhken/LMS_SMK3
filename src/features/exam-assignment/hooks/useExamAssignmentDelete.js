import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteExamAssignment } from "../api/examAssignmentApi";

const useExamAssignmentDelete = (id_class) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => deleteExamAssignment(id_class, id),
    onSuccess: () => {
      queryClient.invalidateQueries(["examAssignments", id_class]);
    },
  });

  const handleDelete = (id) => {
    let confirmed = confirm("Apakah Anda Yakin ?");
    if (confirmed) {
      mutation.mutate(id);
    }
  };

  return {
    handleDelete,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
  };
};

export default useExamAssignmentDelete;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteQuestion } from "../api/questionApi";

const useQuestionDelete = (id) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => deleteQuestion(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["questions"]);
    },
  });

  const handleDelete = () => {
    let confirmed = confirm("Apakah Anda Yakin ?");
    if (confirmed) {
      mutation.mutate();
    }
  };

  return {
    handleDelete,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
  };
};

export default useQuestionDelete;

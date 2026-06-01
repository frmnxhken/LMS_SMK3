import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteStudent } from "../api/studentApi";

const useStudentDelete = (id) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteStudent(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["students"]);
    },
  });

  const handleDelete = () => {
    mutation.mutate();
  };

  return {
    handleDelete,
  };
};

export default useStudentDelete;

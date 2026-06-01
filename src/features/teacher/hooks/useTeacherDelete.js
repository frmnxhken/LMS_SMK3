import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTeacher } from "../api/teacherApi";

const useTeacherDelete = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => deleteTeacher(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["teachers"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return {
    handleDelete,
  };
};

export default useTeacherDelete;

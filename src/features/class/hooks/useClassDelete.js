import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteClass } from "../api/classApi";

const useClassDelete = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => deleteClass(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["classes"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return { handleDelete };
};

export default useClassDelete;

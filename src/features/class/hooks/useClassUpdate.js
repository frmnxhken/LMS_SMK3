import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateClass } from "../api/classApi";

const useClassUpdate = (id) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload) => updateClass(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["classes"]);
    },
  });

  const handleUpdate = (values) => {
    mutation.mutate(JSON.stringify(values));
  };

  return {
    handleUpdate,
  };
};

export default useClassUpdate;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeClass } from "../api/classApi";

const useClassStore = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload) => storeClass(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["classes"]);
    },
  });

  const handleSubmit = (values) => {
    mutation.mutate(JSON.stringify(values));
  };

  return {
    handleSubmit,
  };
};

export default useClassStore;

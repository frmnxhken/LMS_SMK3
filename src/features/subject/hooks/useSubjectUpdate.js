import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSubject } from "../api/subjectApi";

const useSubjectUpdate = (id) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload) => updateSubject(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["subjects"]);
    },
  });

  const handleSubmit = (values) => {
    mutation.mutate(JSON.stringify(values));
  };

  return {
    handleSubmit,
  };
};

export default useSubjectUpdate;

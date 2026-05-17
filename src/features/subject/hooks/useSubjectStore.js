import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeSubject } from "../api/subjectApi";

const useSubjectStore = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload) => storeSubject(payload),
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

export default useSubjectStore;

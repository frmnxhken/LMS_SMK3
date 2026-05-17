import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSubject } from "../api/subjectApi";

const useSubjectDelete = (id) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteSubject(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["subjects"]);
    },
  });

  const handleSubmit = () => {
    mutation.mutate();
  };

  return {
    handleSubmit,
  };
};

export default useSubjectDelete;

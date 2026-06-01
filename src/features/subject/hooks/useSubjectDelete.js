import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSubject } from "../api/subjectApi";

const useSubjectDelete = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => deleteSubject(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["subjects"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return { handleDelete };
};

export default useSubjectDelete;

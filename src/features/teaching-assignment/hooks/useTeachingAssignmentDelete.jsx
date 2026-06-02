import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTeachingAssignment } from "../api/teachingAssignmentApi";

const useTeachingAssignmentDelete = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => deleteTeachingAssignment(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["teachingAssignments"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return {
    handleDelete,
  };
};

export default useTeachingAssignmentDelete;

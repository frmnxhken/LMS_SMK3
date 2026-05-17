import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTeachingAssignment } from "../api/teachingAssignmentApi";
import { useNavigate } from "react-router";

const useTeachingAssignmentStore = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload) => createTeachingAssignment(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["teachingAssignments"]);
      navigate("/dashboard/teaching-assignment");
    },
  });

  const handleSubmit = (values) => {
    mutation.mutate(JSON.stringify(values));
  };

  return { handleSubmit };
};

export default useTeachingAssignmentStore;

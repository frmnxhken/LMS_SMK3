import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateExamAssignment } from "../api/examAssignmentApi";
import { useState } from "react";

const useExamAssignmentUpdate = (id_class) => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const mutation = useMutation({
    mutationFn: ({ payload, id }) =>
      updateExamAssignment(id_class, id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["examAssignments", id_class]);
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleSubmit = (values, id) =>
    mutation.mutate({ payload: values, id: id });
  return { handleSubmit, errors };
};

export default useExamAssignmentUpdate;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createExamAssignment } from "../api/examAssignmentApi";
import { useState } from "react";

const useExamAssignmentCreate = (id_class) => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const mutation = useMutation({
    mutationFn: (payload) => createExamAssignment(id_class, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["examAssignments", id_class]);
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleSubmit = (values) => mutation.mutate(values);
  return {
    handleSubmit,
    errors,
  };
};

export default useExamAssignmentCreate;

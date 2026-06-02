import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTeachingAssignment } from "../api/teachingAssignmentApi";

const useTeachingAssignmentCreate = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);

  const mutation = useMutation({
    mutationFn: (payload) => createTeachingAssignment(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["teachingAssignments"]);
      navigate(-1);
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleSubmit = (values) => {
    mutation.mutate(values);
  };

  return { handleSubmit, isCreating: mutation.isPending, errors };
};

export default useTeachingAssignmentCreate;

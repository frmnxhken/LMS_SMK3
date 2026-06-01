import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSubject } from "../api/subjectApi";

const useSubjectUpdate = (id) => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);

  const mutation = useMutation({
    mutationFn: (payload) => updateSubject(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["subjects"]);
      setErrors(null);
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleUpdate = (values, options) => {
    mutation.mutate(values, options);
  };

  const clearErrors = () => setErrors(null);

  return {
    handleUpdate,
    isUpdating: mutation.isPending,
    errors,
    clearErrors,
  };
};

export default useSubjectUpdate;

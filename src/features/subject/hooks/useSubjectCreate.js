import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeSubject } from "../api/subjectApi";
import { useState } from "react";

const useSubjectCreate = () => {
  const [errors, setErrors] = useState(null);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload) => storeSubject(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["subjects"]);
      setErrors(null);
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleSubmit = (values, option) => {
    mutation.mutate(values, option);
  };

  const clearErrors = () => setErrors(null);

  return {
    handleSubmit,
    isCreating: mutation.isPending,
    errors,
    clearErrors,
  };
};

export default useSubjectCreate;

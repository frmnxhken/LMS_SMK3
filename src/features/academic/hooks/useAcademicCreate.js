import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createAcademicYear } from "../api/academicApi";

const useAcademicCreate = () => {
  const [errors, setErrors] = useState(null);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload) => createAcademicYear(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["academies"]);
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
    errors,
    clearErrors,
  };
};

export default useAcademicCreate;

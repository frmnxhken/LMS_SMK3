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

  const handleSubmit = (values) => {
    mutation.mutate(values);
  };

  return {
    errors,
    handleSubmit,
  };
};

export default useAcademicCreate;

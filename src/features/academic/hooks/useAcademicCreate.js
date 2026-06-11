import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createAcademicYear } from "../api/academicApi";
import { useToast } from "@/app/contexts/ToastContext";

const useAcademicCreate = () => {
  const [errors, setErrors] = useState(null);
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (payload) => createAcademicYear(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["academies"]);
      queryClient.invalidateQueries(["academic-year"]);
      addToast("Data berhasil ditambahkan!");
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

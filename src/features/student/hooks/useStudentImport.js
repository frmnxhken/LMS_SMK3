import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/app/contexts/ToastContext";
import { importStudents } from "../api/studentApi";

const useStudentImport = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (formData) => importStudents(formData),
    onSuccess: () => {
      queryClient.invalidateQueries(["students"]);
      setErrors(null);
      addToast("Import Berhasil!");
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleImport = (values, options) => mutation.mutate(values, options);

  const clearErrors = () => setErrors(null);

  return {
    handleImport,
    isImporting: mutation.isPending,
    errors,
    clearErrors,
  };
};

export default useStudentImport;

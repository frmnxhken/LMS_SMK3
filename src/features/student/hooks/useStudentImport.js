import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { importStudents } from "../api/studentApi";

const useStudentImport = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);

  const mutation = useMutation({
    mutationFn: (formData) => importStudents(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      setErrors(null);
      alert("Import Berhasil!");
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors || ["Terjadi kesalahan sistem"]);
    },
  });

  const handleImport = (values, options) => {
    mutation.mutate(values, options);
  };

  const clearErrors = () => setErrors(null);

  return {
    handleImport,
    isImporting: mutation.isPending,
    errors,
    clearErrors,
  };
};

export default useStudentImport;

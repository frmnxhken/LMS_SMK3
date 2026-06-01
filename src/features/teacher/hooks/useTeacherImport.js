import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { importTeachers } from "../api/teacherApi";

const useTeacherImport = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);

  const mutation = useMutation({
    mutationFn: (formData) => importTeachers(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
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

export default useTeacherImport;

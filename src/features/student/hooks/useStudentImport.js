import { useMutation, useQueryClient } from "@tanstack/react-query";
import { importStudents } from "../api/studentApi";
import { useState } from "react";

const useStudentImport = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);

  const mutation = useMutation({
    mutationFn: (formData) => importStudents(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      alert("Import Berhasil!");
    },

    onError: (error) => {
      setErrors(error.response?.data?.errors || ["Terjadi kesalahan sistem"]);
    },
  });

  const handleSubmit = (values) => {
    mutation.mutate(values);
  };

  return {
    isImporting: mutation.isPending,
    errors,
    handleSubmit,
  };
};

export default useStudentImport;

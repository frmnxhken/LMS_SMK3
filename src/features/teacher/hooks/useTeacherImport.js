import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { importTeachers } from "../api/teacherApi";
import { useToast } from "@/app/contexts/ToastContext";

const useTeacherImport = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (formData) => importTeachers(formData),
    onSuccess: () => {
      queryClient.invalidateQueries(["teachers"]);
      setErrors(null);
      addToast("Import Berhasil!");
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleImport = (values) => {
    mutation.mutate(values, {
      onSuccess: () => handleClose(),
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    setErrors(null);
  };

  const handleOpen = () => setIsOpen(true);

  return {
    isOpen,
    handleImport,
    isImporting: mutation.isPending,
    errors,
    handleOpen,
    handleClose,
  };
};

export default useTeacherImport;

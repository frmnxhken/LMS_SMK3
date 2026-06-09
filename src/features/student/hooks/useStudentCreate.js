import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/app/contexts/ToastContext";
import { storeStudent } from "../api/studentApi";

const useStudentCreate = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (payload) => storeStudent(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["students"]);
      navigate(-1);
      addToast("Data berhasil ditambahkan!");
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleCreate = (values) => mutation.mutate(values);

  return {
    handleCreate,
    isCreating: mutation.isPending,
    errors,
  };
};

export default useStudentCreate;

import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeClass } from "../api/classApi";
import { useToast } from "@/app/contexts/ToastContext";

const useClassCreate = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (payload) => storeClass(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["classes"]);
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

export default useClassCreate;

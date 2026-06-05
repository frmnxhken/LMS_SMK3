import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeClass } from "../api/classApi";
import { useNavigate } from "react-router";
import { useToast } from "@/app/contexts/ToastContext";

const useClassCreate = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [errors, setErrors] = useState(null);

  const mutation = useMutation({
    mutationFn: (payload) => storeClass(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["classes"]);
      navigate(-1);
      addToast("Data berhasil ditambahkan");
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleSubmit = (values) => {
    mutation.mutate(values);
  };

  return {
    handleSubmit,
    isCreating: mutation.isPending,
    errors,
  };
};

export default useClassCreate;

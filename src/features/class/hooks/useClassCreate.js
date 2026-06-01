import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeClass } from "../api/classApi";
import { useNavigate } from "react-router";

const useClassCreate = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);

  const mutation = useMutation({
    mutationFn: (payload) => storeClass(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["classes"]);
      navigate(-1);
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

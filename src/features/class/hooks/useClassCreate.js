import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeClass } from "../api/classApi";

const useClassCreate = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);

  const mutation = useMutation({
    mutationFn: (payload) => storeClass(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["classes"]);
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
    errors,
  };
};

export default useClassCreate;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeStudent } from "../api/studentApi";
import { useState } from "react";
import { useNavigate } from "react-router";

const useStudentCreate = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (payload) => storeStudent(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["students"]);
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

export default useStudentCreate;

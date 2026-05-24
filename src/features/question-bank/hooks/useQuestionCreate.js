import { QueryClient, useMutation } from "@tanstack/react-query";
import { storeQuestion } from "../api/questionApi";
import { useState } from "react";

const useQuestionCreate = () => {
  const queryClient = new QueryClient();
  const [errors, setErrors] = useState(null);

  const mutation = useMutation({
    mutationFn: (payload) => storeQuestion(payload),
    onSuccess: () => {
      alert("Success");
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleSubmit = (values) => {
    mutation.mutate(values);
  };

  return { handleSubmit, errors };
};

export default useQuestionCreate;

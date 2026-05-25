import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateQuestion } from "../api/questionApi";

const useQuestionUpdate = (id) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);

  const mutation = useMutation({
    mutationFn: (payload) => updateQuestion(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["questions"]);
      queryClient.invalidateQueries(["question", id]);
      navigate("/question-bank");
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

export default useQuestionUpdate;

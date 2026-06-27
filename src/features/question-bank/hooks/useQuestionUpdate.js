import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { detailQuestion, updateQuestion } from "../api/questionApi";
import { useToast } from "@/app/contexts/ToastContext";

const useQuestionUpdate = (id) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const { addToast } = useToast();

  const { data, isLoading } = useQuery({
    queryKey: ["questions", id],
    queryFn: () => detailQuestion(id),
    staleTime: 1000 * 60 * 10,
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: (payload) => updateQuestion(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["questions"]);
      queryClient.invalidateQueries(["questions", id]);
      addToast("Data berhasil diperbarui!");
      navigate("/question-bank");
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleSubmit = (values) => {
    mutation.mutate(values);
  };

  return { data: data?.data, isLoading, handleSubmit, errors };
};

export default useQuestionUpdate;

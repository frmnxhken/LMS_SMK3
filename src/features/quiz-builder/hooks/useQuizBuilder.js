import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import {
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from "../api/quizBuilderApi";
import { useToast } from "@/app/contexts/ToastContext";

const useQuizBuilder = (examId) => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState({});
  const { addToast } = useToast();

  const createMutation = useMutation({
    mutationFn: ({ id, payload }) => createQuestion(id, payload),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, payload }) => updateQuestion(id, payload),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteQuestion,
  });

  const handleSubmit = async ({ questions, deletedQuestions }) => {
    try {
      setErrors({});
      const created = questions.filter((question) => !question.id);
      const updated = questions.filter(
        (question) => question.id && question._dirty,
      );

      await Promise.all([
        ...created.map((question) =>
          createMutation.mutateAsync({
            id: examId,
            payload: [question],
          }),
        ),

        ...updated.map((question) =>
          updateMutation.mutateAsync({
            id: question.id,
            payload: question,
          }),
        ),

        ...deletedQuestions.map((questionId) =>
          deleteMutation.mutateAsync(questionId),
        ),
      ]);

      await queryClient.invalidateQueries({
        queryKey: ["question", examId],
      });

      addToast("Data berhasil disimpan!");
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors ?? {});
      }

      throw error;
    }
  };

  return {
    handleSubmit,
    errors,
    isPending:
      createMutation.isPending ||
      updateMutation.isPending ||
      deleteMutation.isPending,
  };
};

export default useQuizBuilder;

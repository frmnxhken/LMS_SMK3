import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { submitExam } from "../api/examApi";
import { useNavigate } from "react-router";

const useExamSubmit = (id_class, id_exam, attemptId) => {
  const [errors, setErrors] = useState(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (payload) => submitExam(id_class, id_exam, payload),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["examDetail", id_class, id_exam],
        exact: true,
      });
      navigate(`/course/${id_class}/exam`);
      localStorage.removeItem(`exam_attempt_${attemptId}`);
    },
  });

  const handleSubmit = (values) => mutation.mutate(values);

  return {
    handleSubmit,
    errors,
  };
};

export default useExamSubmit;

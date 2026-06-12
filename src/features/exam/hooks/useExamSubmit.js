import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { submitExam } from "../api/examApi";
import { useNavigate } from "react-router";

const useExamSubmit = (id_class, id_exam) => {
  const [errors, setErrors] = useState(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (payload) => submitExam(id_class, id_exam, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["examDetail", id_class, id_exam]);
      navigate(`/course/${id_class}/exam`);
    },
  });

  const handleSubmit = (values) => mutation.mutate(values);

  return {
    handleSubmit,
    errors,
  };
};

export default useExamSubmit;

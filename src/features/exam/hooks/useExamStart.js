import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { startExam } from "../api/examApi";
import { useNavigate } from "react-router";

const useExamStart = (id_class, id_exam) => {
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => startExam(id_class, id_exam),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["examDetail", id_class, id_exam],
        exact: true,
      });
      navigate(`/course/${id_class}/exam/${id_exam}`);
    },
  });

  const handleStart = () => mutation.mutate();

  return {
    handleStart,
    errors,
  };
};

export default useExamStart;

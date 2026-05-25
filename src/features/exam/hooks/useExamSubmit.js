import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { submitExam } from "../api/examApi";
import { useNavigate } from "react-router";

const useExamSubmit = (id_class, id_exam) => {
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (payload) => submitExam(id_class, id_exam, payload),
    onSuccess: () => {
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

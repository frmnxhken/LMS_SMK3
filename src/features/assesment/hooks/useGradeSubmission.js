import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { gradeSubmission } from "../api/assessmentApi";
import { useNavigate } from "react-router";

const useGradeSubmission = (id_class, id_post, id_submission, initScore) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [score, setScore] = useState(initScore);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (initScore !== undefined) {
      setScore(initScore);
    }
  }, [initScore]);

  const handleInput = (e) => {
    setScore(e.target.value);
  };

  const mutation = useMutation({
    mutationFn: (payload) => gradeSubmission(id_class, id_submission, payload),
    onSuccess: () => {
      queryClient.invalidateQueries([
        "assesmentDetail",
        id_class,
        id_submission,
      ]);
      navigate(`/course/${id_class}/assignment/${id_post}/assessment`);
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ score });
  };

  return {
    score,
    handleInput,
    handleSubmit,
    isLoading: mutation.isPending,
    errors,
  };
};

export default useGradeSubmission;

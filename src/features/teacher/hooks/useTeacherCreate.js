import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeTeacher } from "../api/teacherApi";

const useTeacherCreate = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (payload) => storeTeacher(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["teachers"]);
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

export default useTeacherCreate;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeStudent } from "../api/studentApi";
import { useState } from "react";
import { useNavigate } from "react-router";

const useStudentStore = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (payload) => storeStudent(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["students"]);
      navigate("/dashboard/student");
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
    errors,
  };
};

export default useStudentStore;

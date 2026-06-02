import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "../api/profileApi";
import { useState } from "react";
import { useNavigate } from "react-router";

const useUpdatePassword = () => {
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (payload) => updatePassword(payload),
    onSuccess: () => {
      navigate(-1);
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleUpdate = (values) => mutation.mutate(values);

  return {
    handleUpdate,
    errors,
  };
};

export default useUpdatePassword;

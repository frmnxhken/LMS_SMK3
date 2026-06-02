import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateAcademicYear } from "../api/academicApi";

const useAcademicUpdate = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);

  const mutation = useMutation({
    mutationFn: ({ payload, id }) => updateAcademicYear(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["academies"]);
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleUpdate = (values, id, option) => {
    mutation.mutate({ payload: values, id: id }, option);
  };

  const clearErrors = () => setErrors(null);

  return {
    handleUpdate,
    isUpdating: mutation.isPending,
    errors,
    clearErrors,
  };
};

export default useAcademicUpdate;

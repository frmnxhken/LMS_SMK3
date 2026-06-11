import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateAcademicYear } from "../api/academicApi";
import { useToast } from "@/app/contexts/ToastContext";

const useAcademicUpdate = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: ({ payload, id }) => updateAcademicYear(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["academies"]);
      addToast("Data berhasil dirubah!");
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

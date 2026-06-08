import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSubject } from "../api/subjectApi";
import { useToast } from "@/app/contexts/ToastContext";

const useSubjectUpdate = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: ({ payload, id }) => updateSubject(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["subjects"]);
      addToast("Data berhasil dirubah!");
      setErrors(null);
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleUpdate = ({ values, id }, option) => {
    mutation.mutate({ payload: values, id: id }, option);
  };

  const clearErrors = () => setErrors(null);

  return {
    handleUpdate,
    isUpdating: mutation.isPending,
    updateErrors: errors,
    clearUpdate: clearErrors,
  };
};

export default useSubjectUpdate;

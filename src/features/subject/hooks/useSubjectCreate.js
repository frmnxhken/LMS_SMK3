import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeSubject } from "../api/subjectApi";
import { useToast } from "@/app/contexts/ToastContext";

const useSubjectCreate = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (payload) => storeSubject(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["subjects"]);
      addToast("Data berhasil ditambahkan!");
      setErrors(null);
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleSubmit = (values, option) => mutation.mutate(values, option);

  const clearErrors = () => setErrors(null);

  return {
    handleSubmit,
    isCreating: mutation.isPending,
    createErrors: errors,
    clearCreate: clearErrors,
  };
};

export default useSubjectCreate;

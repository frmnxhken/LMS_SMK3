import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeTeacher } from "../api/teacherApi";
import { useToast } from "@/app/contexts/ToastContext";

const useTeacherCreate = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (payload) => storeTeacher(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["teachers"]);
      navigate(-1);
      addToast("Data berhasil ditambahkan!");
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleCreate = (values) => mutation.mutate(values);

  return {
    handleCreate,
    isCreating: mutation.isPending,
    errors,
  };
};

export default useTeacherCreate;

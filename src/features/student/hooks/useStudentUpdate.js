import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/app/contexts/ToastContext";
import { getStudentDetail, updateStudent } from "../api/studentApi";

const useStudentUpdate = (id) => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const { data, isLoading } = useQuery({
    queryKey: ["student", id],
    queryFn: () => getStudentDetail(id),
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: (payload) => updateStudent(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["students"]);
      queryClient.invalidateQueries(["student", id]);
      navigate(-1);
      addToast("Data berhasil dirubah!");
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleUpdate = (values) => mutation.mutate(values);

  return {
    handleUpdate,
    errors,
    data: data?.data,
    isLoading,
    isUpdating: mutation.isPending,
  };
};

export default useStudentUpdate;

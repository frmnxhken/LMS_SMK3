import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/app/contexts/ToastContext";
import { getTeacherDetail, updateTeacher } from "../api/teacherApi";

const useTeacherUpdate = (id) => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const { data, isLoading } = useQuery({
    queryKey: ["teacher", id],
    queryFn: () => getTeacherDetail(id),
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: (payload) => updateTeacher(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["teachers"]);
      queryClient.invalidateQueries(["teacher", id]);
      navigate(-1);
      addToast("Data berhasil dirubah!");
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleUpdate = (values) => mutation.mutate(values);

  return {
    isLoading,
    data: data?.data,
    handleUpdate,
    isUpdating: mutation.isPending,
    errors,
  };
};

export default useTeacherUpdate;

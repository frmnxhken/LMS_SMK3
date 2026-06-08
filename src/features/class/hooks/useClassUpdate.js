import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/app/contexts/ToastContext";
import { getDetailClass, updateClass } from "../api/classApi";

const useClassUpdate = (id) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const { addToast } = useToast();

  const { data, isLoading } = useQuery({
    queryKey: ["class", id],
    queryFn: () => getDetailClass(id),
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: (payload) => updateClass(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["classes"]);
      navigate(-1);
      addToast("Data berhasil dirubah!");
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleUpdate = (values) => mutation.mutate(values);

  return {
    data,
    isLoading,
    handleUpdate,
    isUpdating: mutation.isPending,
    errors,
  };
};

export default useClassUpdate;

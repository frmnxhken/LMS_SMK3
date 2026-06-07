import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { getWeightScore, updateWeightScore } from "../api/weightScoreApi";
import { useToast } from "@/app/contexts/ToastContext";
import { useNavigate } from "react-router";

const useWeightScoreUpdate = (id_class) => {
  const [errors, setErrors] = useState(null);
  const queryClient = useQueryClient();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["weight", id_class],
    queryFn: () => getWeightScore(id_class),
    staleTime: 1000 * 60 * 10,
    enabled: !!id_class,
  });

  const mutation = useMutation({
    mutationFn: (payload) => updateWeightScore(id_class, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["weight", id_class]);
      queryClient.invalidateQueries(["teacherReport", id_class]);
      addToast("Bobot telah diperbarui!");
      navigate(-1);
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleUpdate = (values) => {
    mutation.mutate(values);
  };

  return {
    data,
    isLoading,
    handleUpdate,
    isUpdating: mutation.isPending,
    errors,
  };
};

export default useWeightScoreUpdate;

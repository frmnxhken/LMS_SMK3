import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDetailClass, updateClass } from "../api/classApi";
import { useState } from "react";
import { useNavigate } from "react-router";

const useClassUpdate = (id) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);

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

export default useClassUpdate;

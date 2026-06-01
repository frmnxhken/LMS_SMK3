import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDetailClass, updateClass } from "../api/classApi";
import { useState } from "react";

const useClassUpdate = (id) => {
  const queryClient = useQueryClient();
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
    errors,
  };
};

export default useClassUpdate;

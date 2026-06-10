import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import {
  getTeachingAssignmentDetail,
  updateTeachingAssignment,
} from "../api/teachingAssignmentApi";

const useTeachingAssignmentUpdate = (id) => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["teachingAssignment", id],
    queryFn: () => getTeachingAssignmentDetail(id),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: (payload) => updateTeachingAssignment(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teachingAssignments", id] });
      queryClient.invalidateQueries({ queryKey: ["teachingAssignments"] });
      navigate(-1);
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleUpdate = (values) => mutation.mutate(values);

  return {
    handleUpdate,
    errors,
    data,
    isLoading,
    isUpdating: mutation.isPending,
  };
};

export default useTeachingAssignmentUpdate;

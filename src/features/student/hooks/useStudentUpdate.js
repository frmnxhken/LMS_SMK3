import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getStudentDetail, updateStudent } from "../api/studentApi";
import { useState } from "react";
import { useNavigate } from "react-router";

const useStudentUpdate = (id) => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

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
      navigate("/dashboard/student");
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleSubmit = (values) => {
    mutation.mutate(values);
  };

  return {
    handleSubmit,
    errors,
    student: data?.data,
    isLoading,
    isUpdating: mutation.isPending,
  };
};

export default useStudentUpdate;

import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/app/contexts/ToastContext";
import { createTeachingAssignment } from "../api/teachingAssignmentApi";

const useTeachingAssignmentCreate = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (payload) => createTeachingAssignment(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["teachingAssignments"]);
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

export default useTeachingAssignmentCreate;

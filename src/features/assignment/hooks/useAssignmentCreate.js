import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAssignment } from "../api/assignmentApi";
import { useNavigate } from "react-router";
import { useState } from "react";

const useAssignmentCreate = (id_class) => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (payload) => createAssignment(id_class, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["coursePosts", id_class]);
      navigate(`/course/${id_class}`);
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleSubmit = (values) => {
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("content", values.content);
    formData.append("due", values.due);
    if (values.files && values.files.length > 0) {
      Array.from(values.files).forEach((file) => {
        formData.append("files[]", file);
      });
    }

    mutation.mutate(formData);
  };

  return {
    handleSubmit,
    isLoading: mutation.isPending,
    errors,
  };
};

export default useAssignmentCreate;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMaterial } from "../api/materialApi";
import { useNavigate } from "react-router";
import { useState } from "react";

const useMaterialCreate = (id_class) => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (payload) => createMaterial(id_class, payload),
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

export default useMaterialCreate;

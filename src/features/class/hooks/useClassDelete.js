import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteClass } from "../api/classApi";

const useClassDelete = (id) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteClass(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["classes"]);
    },
  });

  const handleSubmit = () => {
    mutation.mutate();
  };

  return {
    handleSubmit,
  };
};

export default useClassDelete;

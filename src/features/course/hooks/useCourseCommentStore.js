import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeComment } from "../api/courseCommentApi";
import { useState } from "react";

const useCourseCommentStore = (id_class, id_post) => {
  const queryClient = useQueryClient();
  const [message, setMessage] = useState(null);

  const mutation = useMutation({
    mutationFn: (payload) => storeComment(id_class, id_post, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["courseComments", id_class, id_post]);
    },
  });

  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ message });
    e.target.reset();
  };

  return {
    message,
    handleSubmit,
    handleInput,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
  };
};

export default useCourseCommentStore;

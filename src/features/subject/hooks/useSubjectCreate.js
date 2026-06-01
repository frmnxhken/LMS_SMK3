import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeSubject } from "../api/subjectApi";
import { useState } from "react";

const useSubjectCreate = () => {
  const [errors, setErrors] = useState(null);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload) => storeSubject(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["subjects"]);
    },
  });

  const handleSubmit = (values) => {
    mutation.mutate(JSON.stringify(values));
  };

  return {
    handleSubmit,
    errors,
  };
};

export default useSubjectCreate;

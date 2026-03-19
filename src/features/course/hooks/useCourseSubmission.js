import { useState } from "react";
import { storeSubmission } from "../api/courseSubmissionApi";
import { useMutation } from "@tanstack/react-query";

const useCourseSubmission = (id_class, id_post) => {
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState(null);

  const mutation = useMutation({
    mutationFn: (formData) => storeSubmission(id_class, id_post, formData),
    onSuccess: (data) => {
      setFiles([]);
      setErrors(null);
    },
    onError: (err) => {
      setErrors(err.response?.data?.errors);
    },
  });

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const handleRemoveFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));
    mutation.mutate(formData);
  };

  return { files, handleFileChange, handleRemoveFile, handleSubmit, errors };
};

export default useCourseSubmission;

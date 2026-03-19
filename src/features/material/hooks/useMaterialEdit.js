import { useEffect, useState } from "react";
import { deleteFile, updateMaterial } from "../api/materialApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useCoursePostDetail from "@/features/course/hooks/useCoursePostDetail";
import { useNavigate } from "react-router";

const useMaterialEdit = (id_class, id_post) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const materialQuery = useCoursePostDetail(id_class, id_post);
  const [errors, setErrors] = useState(null);
  const [existingFiles, setExistingFiles] = useState([]);

  useEffect(() => {
    if (materialQuery.data?.post_files) {
      setExistingFiles(materialQuery.data.post_files);
    }
  }, [materialQuery.data]);

  const deleteFileMutation = useMutation({
    mutationFn: (fileId) => deleteFile(fileId),
    onSuccess: (_, fileId) => {
      setExistingFiles((prev) => prev.filter((f) => f.id !== fileId));
    },
  });

  const handleDeleteFile = (fileId) => {
    deleteFileMutation.mutate(fileId);
  };

  const mutation = useMutation({
    mutationFn: (payload) => updateMaterial(id_class, id_post, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["coursePostDetail", id_class, id_post]);
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
    isLoading: materialQuery.isLoading,
    data: materialQuery.data,
    existingFiles,
    handleDeleteFile,
    handleSubmit,
    errors,
  };
};

export default useMaterialEdit;

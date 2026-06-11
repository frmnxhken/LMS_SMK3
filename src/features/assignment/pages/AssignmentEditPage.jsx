import React from "react";
import { useParams } from "react-router";
import AssignmentForm from "../ui/AssignmentForm";
import useAssignmentEdit from "../hooks/useAssignmentEdit";

export const AssignmentEditPage = () => {
  const { id_class, id_post } = useParams();
  const {
    data,
    errors,
    isLoading,
    isPending,
    handleDeleteFile,
    existingFiles,
    handleSubmit,
  } = useAssignmentEdit(id_class, id_post);
  if (isLoading) return;
  return (
    <div className="container max-w-[780px] p-6 mx-auto">
      <div className="border border-app-border p-4 rounded-xl">
        <AssignmentForm
          initialData={data}
          errors={errors}
          onSubmit={(data) => handleSubmit(data)}
          onDelete={handleDeleteFile}
          existingFiles={existingFiles}
          isPending={isPending}
        />
      </div>
    </div>
  );
};

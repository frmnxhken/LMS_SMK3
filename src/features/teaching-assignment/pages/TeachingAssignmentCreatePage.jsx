import React from "react";
import useTeachingAssignmentStore from "../hooks/useTeachingAssignmentCreate";
import TeachingAssignmentForm from "../ui/TeachingAssignmentForm";

export const TeachingAssignmentCreatePage = () => {
  const { handleCreate, isCreating, errors } = useTeachingAssignmentStore();

  return (
    <div className="container max-w-[780px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-lg sm:text-xl font-bold text-text-heading mb-6">
          Tambah Pengajar
        </h1>
        <TeachingAssignmentForm
          onSubmit={handleCreate}
          isPending={isCreating}
          errors={errors}
        />
      </div>
    </div>
  );
};

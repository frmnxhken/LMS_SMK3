import React from "react";
import useTeachingAssignmentStore from "../hooks/useTeachingAssignmentCreate";
import TeachingAssignmentForm from "../ui/TeachingAssignmentForm";

const TeachingAssignmentCreatePage = () => {
  const { handleSubmit, isCreating, errors } = useTeachingAssignmentStore();

  return (
    <div className="container max-w-[780px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-xl font-bold text-text-heading mb-6">
          Tambah Pengajar
        </h1>
        <TeachingAssignmentForm
          onSubmit={handleSubmit}
          onPending={isCreating}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default TeachingAssignmentCreatePage;

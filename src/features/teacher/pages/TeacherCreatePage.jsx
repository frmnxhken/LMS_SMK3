import React from "react";
import TeacherForm from "../ui/TeacherForm";
import useTeacherCreate from "../hooks/useTeacherCreate";

export const TeacherCreatePage = () => {
  const { handleSubmit, isCreating, errors } = useTeacherCreate();

  return (
    <div className="container max-w-[680px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-xl text-text-heading font-bold mb-4">
          Tambah Guru
        </h1>
        <TeacherForm
          onSubmit={handleSubmit}
          onPending={isCreating}
          errors={errors}
        />
      </div>
    </div>
  );
};

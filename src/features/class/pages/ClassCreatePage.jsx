import React from "react";
import ClassForm from "../ui/ClassForm";
import useClassCreate from "../hooks/useClassCreate";

export const ClassCreatePage = () => {
  const { handleSubmit, isCreating, errors } = useClassCreate();

  return (
    <div className="p-6 container mx-auto max-w-[600px]">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-xl text-text-heading font-bold mb-4">
          Tambah Kelas
        </h1>
        <ClassForm
          onSubmit={handleSubmit}
          onPending={isCreating}
          errors={errors}
        />
      </div>
    </div>
  );
};

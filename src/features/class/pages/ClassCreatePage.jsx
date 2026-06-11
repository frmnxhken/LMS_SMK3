import React from "react";
import ClassForm from "../ui/ClassForm";
import useClassCreate from "../hooks/useClassCreate";

export const ClassCreatePage = () => {
  const { handleCreate, isCreating, errors } = useClassCreate();

  return (
    <div className="p-6 container mx-auto max-w-[600px]">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-lg sm:text-xl font-bold text-text-heading mb-4">
          Tambah Kelas
        </h1>
        <ClassForm
          onSubmit={handleCreate}
          isPending={isCreating}
          errors={errors}
        />
      </div>
    </div>
  );
};

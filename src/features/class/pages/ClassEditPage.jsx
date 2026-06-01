import React from "react";
import ClassForm from "../ui/ClassForm";
import useClassUpdate from "../hooks/useClassUpdate";
import { useParams } from "react-router";

export const ClassEditPage = () => {
  const { id } = useParams();
  const { isLoading, data, handleUpdate, errors } = useClassUpdate(id);
  if (isLoading) return;

  return (
    <div className="p-6 container mx-auto max-w-[600px]">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-xl text-text-heading font-bold mb-4">Edit Kelas</h1>
        <ClassForm initData={data} onSubmit={handleUpdate} errors={errors} />
      </div>
    </div>
  );
};

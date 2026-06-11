import React from "react";
import { useParams } from "react-router";
import ClassForm from "../ui/ClassForm";
import ClassEditSkeleton from "../ui/skeletons/ClassEditSkeleton";
import useClassUpdate from "../hooks/useClassUpdate";

export const ClassEditPage = () => {
  const { id } = useParams();
  const { isLoading, data, handleUpdate, isUpdating, errors } =
    useClassUpdate(id);

  return (
    <div className="p-6 container mx-auto max-w-[600px]">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-lg sm:text-xl font-bold text-text-heading mb-4">
          Edit Kelas
        </h1>
        {isLoading ? (
          <ClassEditSkeleton />
        ) : (
          <ClassForm
            initData={data}
            onSubmit={handleUpdate}
            isPending={isUpdating}
            errors={errors}
          />
        )}
      </div>
    </div>
  );
};

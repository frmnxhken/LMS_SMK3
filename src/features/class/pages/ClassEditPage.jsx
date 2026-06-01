import React from "react";
import ClassForm from "../ui/ClassForm";
import useClassUpdate from "../hooks/useClassUpdate";
import { useParams } from "react-router";
import ClassEditSkeleton from "../ui/skeletons/ClassEditSkeleton";
import TopLoader from "@/shared/ui/Feedback/TopLoader";

export const ClassEditPage = () => {
  const { id } = useParams();
  const { isLoading, data, handleUpdate, isUpdating, errors } =
    useClassUpdate(id);

  return (
    <div className="p-6 container mx-auto max-w-[600px]">
      <TopLoader isLoading={isLoading} />
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-xl text-text-heading font-bold mb-4">Edit Kelas</h1>
        {isLoading ? (
          <ClassEditSkeleton />
        ) : (
          <ClassForm
            initData={data}
            onSubmit={handleUpdate}
            onPending={isUpdating}
            errors={errors}
          />
        )}
      </div>
    </div>
  );
};

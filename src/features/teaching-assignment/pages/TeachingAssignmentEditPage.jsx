import React from "react";
import { useParams } from "react-router";
import TeachingAssignmentForm from "../ui/TeachingAssignmentForm";
import useTeachingAssignmentUpdate from "../hooks/useTeachingAssignmentUpdate";
import TeachingAssignmentEditSkeleton from "../ui/skeletons/TeachingAssignmentEditSkeleton";

const TeachingAssignmentEditPage = () => {
  const { id } = useParams();
  const { isLoading, data, handleUpdate, isUpdating, errors } =
    useTeachingAssignmentUpdate(id);

  return (
    <div className="container max-w-[780px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-xl font-bold text-text-heading mb-6">
          Edit Pengajar
        </h1>
        {isLoading ? (
          <TeachingAssignmentEditSkeleton />
        ) : (
          <TeachingAssignmentForm
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

export default TeachingAssignmentEditPage;

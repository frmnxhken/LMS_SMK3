import React from "react";
import { useParams } from "react-router";
import TeacherForm from "../ui/TeacherForm";
import TeacherEditSkeleton from "../ui/skeletons/TeacherEditSkeleton";
import useTeacherUpdate from "../hooks/useTeacherUpdate";

export const TeacherEditPage = () => {
  const { id } = useParams();
  const { isLoading, data, handleUpdate, isUpdating, errors } =
    useTeacherUpdate(id);

  return (
    <div className="container max-w-[680px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-lg sm:text-xl font-bold text-text-heading mb-4">
          Edit Guru
        </h1>
        {isLoading ? (
          <TeacherEditSkeleton />
        ) : (
          <TeacherForm
            id={id}
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

import React from "react";
import { useParams } from "react-router";
import StudentForm from "../ui/StudentForm";
import StudentEditSkeleton from "../ui/skeletons/StudentEditSkeleton";
import useStudentUpdate from "../hooks/useStudentUpdate";
import useClassList from "@/features/class/hooks/useClassList";

export const StudentEditPage = () => {
  const { id } = useParams();
  const { data: classes } = useClassList();
  const { handleUpdate, isUpdating, errors, data, isLoading } =
    useStudentUpdate(id);

  return (
    <div className="container max-w-[680px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-lg sm:text-xl font-bold text-text-heading mb-4">
          Edit Siswa
        </h1>
        {isLoading ? (
          <StudentEditSkeleton />
        ) : (
          <StudentForm
            initData={data}
            classes={classes}
            errors={errors}
            onSubmit={handleUpdate}
            isPending={isUpdating}
          />
        )}
      </div>
    </div>
  );
};

import React from "react";
import { useParams } from "react-router";
import useClass from "@/features/class/hooks/useClass";
import StudentForm from "../ui/StudentForm";
import StudentEditSkeleton from "../ui/skeletons/StudentEditSkeleton";
import useStudentUpdate from "../hooks/useStudentUpdate";

const StudentEditPage = () => {
  const { id } = useParams();
  const { data: classes } = useClass();
  const { handleUpdate, isUpdating, errors, student, isLoading } =
    useStudentUpdate(id);

  return (
    <div className="container max-w-[680px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-xl text-text-heading font-bold mb-4">Edit Siswa</h1>
        {isLoading ? (
          <StudentEditSkeleton />
        ) : (
          <StudentForm
            initData={student}
            classes={classes}
            errors={errors}
            onSubmit={handleUpdate}
            onPending={isUpdating}
          />
        )}
      </div>
    </div>
  );
};

export default StudentEditPage;

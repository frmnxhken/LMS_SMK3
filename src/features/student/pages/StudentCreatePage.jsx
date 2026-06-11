import React from "react";
import StudentForm from "../ui/StudentForm";
import useStudentCreate from "../hooks/useStudentCreate";
import useClassList from "@/features/class/hooks/useClassList";

export const StudentCreatePage = () => {
  const { data: classes } = useClassList();
  const { handleCreate, isCreating, errors } = useStudentCreate();

  return (
    <div className="container max-w-[680px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-lg sm:text-xl font-bold text-text-heading mb-4">
          Tambah Siswa
        </h1>
        <StudentForm
          classes={classes}
          errors={errors}
          onSubmit={handleCreate}
          isPending={isCreating}
        />
      </div>
    </div>
  );
};

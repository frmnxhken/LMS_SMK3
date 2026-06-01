import React from "react";
import useClass from "@/features/class/hooks/useClass";
import StudentForm from "../ui/StudentForm";
import useStudentCreate from "../hooks/useStudentCreate";

const StudentCreatePage = () => {
  const { data: classes } = useClass();
  const { handleSubmit, isCreating, errors } = useStudentCreate();

  return (
    <div className="container max-w-[680px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-xl text-text-heading font-bold mb-4">
          Tambah Siswa
        </h1>
        <StudentForm
          classes={classes}
          errors={errors}
          onSubmit={handleSubmit}
          onPending={isCreating}
        />
      </div>
    </div>
  );
};

export default StudentCreatePage;

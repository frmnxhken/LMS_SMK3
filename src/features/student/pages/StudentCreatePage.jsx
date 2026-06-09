import React from "react";
import StudentForm from "../ui/StudentForm";
import useClass from "@/features/class/hooks/useClass";
import useStudentCreate from "../hooks/useStudentCreate";

const StudentCreatePage = () => {
  const { data: classes } = useClass();
  const { handleCreate, isCreating, errors } = useStudentCreate();

  return (
    <div className="container max-w-[680px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-xl text-text-heading font-bold mb-4">
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

export default StudentCreatePage;

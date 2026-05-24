import React from "react";
import useClass from "@/features/class/hooks/useClass";
import StudentForm from "../ui/StudentForm";
import useStudentStore from "../hooks/useStudentStore";

const StudentCreatePage = () => {
  const { data: classes } = useClass();
  const { handleSubmit, errors } = useStudentStore();

  return (
    <div className="container max-w-[680px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-xl text-text-heading font-bold mb-4">
          Tambah Siswa
        </h1>
        <StudentForm
          classes={classes}
          errors={errors}
          onSubmit={(data) => handleSubmit(data)}
        />
      </div>
    </div>
  );
};

export default StudentCreatePage;

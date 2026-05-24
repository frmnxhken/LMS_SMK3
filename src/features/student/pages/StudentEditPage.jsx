import React from "react";
import useClass from "@/features/class/hooks/useClass";
import StudentForm from "../ui/StudentForm";
import useStudentUpdate from "../hooks/useStudentUpdate";
import { useParams } from "react-router";

const StudentEditPage = () => {
  const { id } = useParams();
  const { data: classes } = useClass();
  const { handleSubmit, errors, student, isLoading } = useStudentUpdate(id);
  if (isLoading) return;

  return (
    <div className="container max-w-[680px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-xl text-text-heading font-bold mb-4">Edit Siswa</h1>
        <StudentForm
          initData={student}
          classes={classes}
          errors={errors}
          onSubmit={(data) => handleSubmit(data)}
        />
      </div>
    </div>
  );
};

export default StudentEditPage;

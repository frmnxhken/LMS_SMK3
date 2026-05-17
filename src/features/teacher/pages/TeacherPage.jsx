import React from "react";
import TeacherTable from "../ui/TeacherTable";
import useTeacher from "../hooks/useTeacher";

const TeacherPage = () => {
  const { data } = useTeacher();
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold text-text-heading mb-2">Daftar Guru</h1>
      <div className="table-responsive mt-4">
        <TeacherTable teachers={data} />
      </div>
    </div>
  );
};

export default TeacherPage;

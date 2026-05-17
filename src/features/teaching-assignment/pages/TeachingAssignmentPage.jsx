import React from "react";
import useTeachingAssignment from "../hooks/useTeachingAssignment";
import TeachingAssignmentTable from "../ui/TeachingAssignmentTable";

const TeachingAssignmentPage = () => {
  const { data } = useTeachingAssignment();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold text-text-heading mb-2">
        Daftar Pengajar
      </h1>
      <div className="table-responsive mt-4">
        <TeachingAssignmentTable data={data} />
      </div>
    </div>
  );
};

export default TeachingAssignmentPage;

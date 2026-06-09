import React from "react";
import TeachingAssignmentTable from "../ui/TeachingAssignmentTable";
import TeachingAssignmentHeader from "../ui/TeachingAssignmentHeader";
import Pagination from "@/shared/ui/navigation/Pagination";
import useTeachingAssignment from "../hooks/useTeachingAssignment";

const TeachingAssignmentPage = () => {
  const { isLoading, data, page, handlePageChange, pagination } =
    useTeachingAssignment();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold text-text-heading mb-4">
        Daftar Pengajar
      </h1>

      <TeachingAssignmentHeader />

      <div className="table-responsive mt-4">
        <TeachingAssignmentTable data={data} isLoading={isLoading} />
      </div>

      <Pagination
        page={page}
        setPage={handlePageChange}
        totalPages={pagination.last_page}
      />
    </div>
  );
};

export default TeachingAssignmentPage;

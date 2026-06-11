import React from "react";
import TeachingAssignmentTable from "../ui/TeachingAssignmentTable";
import TeachingAssignmentHeader from "../ui/TeachingAssignmentHeader";
import Pagination from "@/shared/ui/navigation/Pagination";
import useTeachingAssignment from "../hooks/useTeachingAssignment";
import { useAcademicYear } from "@/app/contexts/AcademicYearContext";

export const TeachingAssignmentPage = () => {
  const { isLoading, data, page, handlePageChange, pagination } =
    useTeachingAssignment();
  const { status } = useAcademicYear();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-lg sm:text-xl font-bold text-text-heading mb-4">
        Daftar Pengajar
      </h1>

      <TeachingAssignmentHeader status={status} />

      <div className="table-responsive mt-4">
        <TeachingAssignmentTable
          data={data}
          isLoading={isLoading}
          status={status}
        />
      </div>

      <Pagination
        page={page}
        setPage={handlePageChange}
        totalPages={pagination.last_page}
      />
    </div>
  );
};

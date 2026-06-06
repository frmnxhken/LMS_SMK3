import React from "react";
import AdminReportAttendanceTable from "../ui/AdminReportAttendanceTable";
import AdminReportAttendanceHeader from "../ui/AdminReportAttendanceHeader";
import useAdminReportToday from "../hooks/useAdminReportToday";
import Pagination from "@/shared/ui/navigation/Pagination";

const AdminReportAttendancePage = () => {
  const { data, isLoading, page, handlePageChange, pagination } =
    useAdminReportToday();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-text-heading">Absensi Hari Ini</h1>
      <div className="mt-4">
        <AdminReportAttendanceHeader />
        <AdminReportAttendanceTable data={data} isLoading={isLoading} />
        <Pagination
          page={page}
          setPage={handlePageChange}
          totalPages={pagination.last_page}
        />
      </div>
    </div>
  );
};

export default AdminReportAttendancePage;

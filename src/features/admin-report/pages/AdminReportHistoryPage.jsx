import React from "react";
import AdminReportHistoryHeader from "../ui/AdminReportHistoryHeader";
import AdminReportHistoryTable from "../ui/AdminReportHistoryTable";
import useAdminReportHistory from "../hooks/useAdminReportHistory";
import Pagination from "@/shared/ui/navigation/Pagination";

const AdminReportHistoryPage = () => {
  const { data, isLoading, page, handlePageChange, pagination } =
    useAdminReportHistory();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-text-heading">Riwayat Absensi</h1>
      <div className="mt-4">
        <AdminReportHistoryHeader />
        <AdminReportHistoryTable data={data} isLoading={isLoading} />
        <Pagination
          page={page}
          setPage={handlePageChange}
          totalPages={pagination.last_page}
        />
      </div>
    </div>
  );
};

export default AdminReportHistoryPage;

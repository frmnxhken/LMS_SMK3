import React from "react";
import AdminReportAttendanceTable from "../ui/AdminReportAttendanceTable";
import AdminReportHistoryHeader from "../ui/AdminReportHistoryHeader";

const AdminReportHistoryPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-text-heading">Riwayat Absensi</h1>
      <div className="mt-4">
        <AdminReportHistoryHeader />
        <AdminReportAttendanceTable />
      </div>
    </div>
  );
};

export default AdminReportHistoryPage;

import React from "react";
import AdminReportAttendanceTable from "../ui/AdminReportAttendanceTable";
import AdminReportAttendanceHeader from "../ui/AdminReportAttendanceHeader";

const AdminReportAttendancePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-text-heading">Absensi Hari Ini</h1>
      <div className="mt-4">
        <AdminReportAttendanceHeader />
        <AdminReportAttendanceTable />
      </div>
    </div>
  );
};

export default AdminReportAttendancePage;

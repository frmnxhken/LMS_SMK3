import React from "react";
import AdminReportExportForm from "../ui/AdminReportExportForm";

export const AdminReportExportPage = () => {
  return (
    <div className="p-6 max-w-[600px] mx-auto container">
      <h1 className="text-lg sm:text-xl font-bold text-text-heading mb-4">
        Export Absensi
      </h1>
      <div className="border border-app-border p-4 rounded-lg">
        <AdminReportExportForm />
      </div>
    </div>
  );
};

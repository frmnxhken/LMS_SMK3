import React from "react";
import AdminReportExportForm from "../ui/AdminReportExportForm";

export const AdminReportExportPage = () => {
  return (
    <div className="p-6 max-w-[600px] mx-auto container">
      <h1 className="text-xl text-text-heading font-bold mb-4">
        Export Absensi
      </h1>
      <div className="border border-app-border p-4 rounded-lg">
        <AdminReportExportForm />
      </div>
    </div>
  );
};

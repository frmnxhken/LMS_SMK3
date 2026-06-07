import React, { useState } from "react";
import AdminReportAttendanceTable from "../ui/AdminReportAttendanceTable";
import AdminReportAttendanceHeader from "../ui/AdminReportAttendanceHeader";
import useAdminReportToday from "../hooks/useAdminReportToday";
import Pagination from "@/shared/ui/navigation/Pagination";
import Modal from "@/shared/ui/modal/Modal";
import AdminReportForm from "../ui/AdminReportForm";
import useAdminReportUpsert from "../hooks/useAdminReportUpsert";

const AdminReportAttendancePage = () => {
  const { data, isLoading, page, handlePageChange, pagination } =
    useAdminReportToday();
  const [selectedData, setSelectedData] = useState(null);
  const { handleUpdate, errors, clearErrors, isUpdating } =
    useAdminReportUpsert();

  const handleCloseModal = () => {
    setSelectedData(null);
    clearErrors();
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-text-heading">Absensi Hari Ini</h1>
      <div className="mt-4">
        <Modal isOpen={selectedData} title="Edit" onClose={handleCloseModal}>
          <AdminReportForm
            initData={selectedData}
            onSubmit={handleUpdate}
            errors={errors}
            closeModal={handleCloseModal}
            onPending={isUpdating}
          />
        </Modal>
        <AdminReportAttendanceHeader />
        <AdminReportAttendanceTable
          data={data}
          isLoading={isLoading}
          onEdit={(student) => setSelectedData(student)}
        />
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

import React, { useState } from "react";
import AdminReportHistoryHeader from "../ui/AdminReportHistoryHeader";
import AdminReportHistoryTable from "../ui/AdminReportHistoryTable";
import useAdminReportHistory from "../hooks/useAdminReportHistory";
import Pagination from "@/shared/ui/navigation/Pagination";
import Modal from "@/shared/ui/modal/Modal";
import AdminReportForm from "../ui/AdminReportForm";
import useAdminReportUpsert from "../hooks/useAdminReportUpsert";

const AdminReportHistoryPage = () => {
  const { data, isLoading, page, handlePageChange, pagination } =
    useAdminReportHistory();
  const [selectedData, setSelectedData] = useState(null);
  const { handleUpdate, errors, clearErrors, isUpdating } =
    useAdminReportUpsert();

  const handleCloseModal = () => {
    setSelectedData(null);
    clearErrors();
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-text-heading">Riwayat Absensi</h1>
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
        <AdminReportHistoryHeader />
        <AdminReportHistoryTable
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

export default AdminReportHistoryPage;

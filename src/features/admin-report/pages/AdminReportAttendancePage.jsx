import React from "react";
import Pagination from "@/shared/ui/navigation/Pagination";
import Modal from "@/shared/ui/modal/Modal";
import AdminReportAttendanceTable from "../ui/AdminReportAttendanceTable";
import AdminReportAttendanceHeader from "../ui/AdminReportAttendanceHeader";
import AdminReportForm from "../ui/AdminReportForm";
import useAdminReportToday from "../hooks/useAdminReportToday";
import useAdminReportUpsert from "../hooks/useAdminReportUpsert";

export const AdminReportAttendancePage = () => {
  const { data, isLoading, page, handlePageChange, pagination } =
    useAdminReportToday();
  const {
    selectedData,
    handleUpdate,
    onEdit,
    errors,
    handleClose,
    isUpdating,
  } = useAdminReportUpsert();

  return (
    <div className="p-6">
      <h1 className="text-lg sm:text-xl font-bold text-text-heading">
        Absensi Hari Ini
      </h1>
      <div className="mt-4">
        <Modal isOpen={selectedData} title="Edit" onClose={handleClose}>
          <AdminReportForm
            initData={selectedData}
            onSubmit={handleUpdate}
            errors={errors}
            closeModal={handleClose}
            isPending={isUpdating}
          />
        </Modal>
        <AdminReportAttendanceHeader />
        <AdminReportAttendanceTable
          data={data}
          isLoading={isLoading}
          onEdit={onEdit}
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

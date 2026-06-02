import React, { useState } from "react";
import Modal from "@/shared/ui/modal/Modal";
import Pagination from "@/shared/ui/navigation/Pagination";
import TeacherHeader from "../ui/TeacherHeader";
import TeacherTable from "../ui/TeacherTable";
import TeacherImportForm from "../ui/TeacherImportForm";
import useTeacher from "../hooks/useTeacher";
import useTeacherImport from "../hooks/useTeacherImport";

export const TeacherPage = () => {
  const { isLoading, data, page, pagination, handlePageChange } = useTeacher();
  const [open, setOpen] = useState(null);
  const { isImporting, handleImport, errors, clearErrors } = useTeacherImport();

  const handleCloseModal = () => {
    clearErrors();
    setOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold text-text-heading mb-2">Daftar Guru</h1>
      <TeacherHeader openModal={() => setOpen(true)} />

      <Modal isOpen={open} onClose={handleCloseModal} title="Import Data">
        <TeacherImportForm
          closeModal={handleCloseModal}
          onSubmit={handleImport}
          onPending={isImporting}
          errors={errors}
        />
      </Modal>

      <div className="table-responsive mt-4">
        <TeacherTable teachers={data} isLoading={isLoading} />
      </div>

      <Pagination
        page={page}
        setPage={handlePageChange}
        totalPages={pagination.last_page}
      />
    </div>
  );
};

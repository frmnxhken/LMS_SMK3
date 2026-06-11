import React from "react";
import Modal from "@/shared/ui/modal/Modal";
import Pagination from "@/shared/ui/navigation/Pagination";
import TeacherHeader from "../ui/TeacherHeader";
import TeacherTable from "../ui/TeacherTable";
import TeacherImportForm from "../ui/TeacherImportForm";
import useTeacher from "../hooks/useTeacher";
import useTeacherImport from "../hooks/useTeacherImport";
import { useAcademicYear } from "@/app/contexts/AcademicYearContext";

export const TeacherPage = () => {
  const { isLoading, data, page, pagination, handlePageChange } = useTeacher();
  const { isOpen, isImporting, handleImport, errors, handleOpen, handleClose } =
    useTeacherImport();
  const { status } = useAcademicYear();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-lg sm:text-xl font-bold text-text-heading mb-2">
        Daftar Guru
      </h1>
      <TeacherHeader openModal={handleOpen} status={status} />

      <Modal isOpen={isOpen} onClose={handleClose} title="Import Data">
        <TeacherImportForm
          onSubmit={handleImport}
          isPending={isImporting}
          errors={errors}
        />
      </Modal>

      <div className="table-responsive mt-4">
        <TeacherTable teachers={data} isLoading={isLoading} status={status} />
      </div>

      <Pagination
        page={page}
        setPage={handlePageChange}
        totalPages={pagination.last_page}
      />
    </div>
  );
};

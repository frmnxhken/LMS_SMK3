import React from "react";
import Modal from "@/shared/ui/modal/Modal";
import Pagination from "@/shared/ui/navigation/Pagination";
import StudentTable from "../ui/StudentTable";
import StudentHeader from "../ui/StudentHeader";
import StudentImportForm from "../ui/StudentImportForm";
import StudentExportForm from "../ui/StudentExportForm";
import useStudent from "../hooks/useStudent";
import useStudentAction from "../hooks/useStudentAction";
import useClassList from "@/features/class/hooks/useClassList";
import { useAcademicYear } from "@/app/contexts/AcademicYearContext";

export const StudentPage = () => {
  const { isLoading, data, page, handlePageChange, pagination } = useStudent();
  const { data: classes } = useClassList();
  const { status } = useAcademicYear();
  const { isOpen, isImporting, isExporting, errors, actions } =
    useStudentAction();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-lg sm:text-xl font-bold text-text-heading mb-2">
        Daftar Siswa
      </h1>

      <StudentHeader
        classes={classes}
        handleOpen={actions.handleOpen}
        status={status}
      />

      <Modal
        isOpen={isOpen}
        onClose={actions.handleClose}
        title={isOpen === "import" ? "Import Data" : "Export Data"}
      >
        {isOpen === "import" ? (
          <StudentImportForm
            classes={classes}
            closeModal={actions.handleClose}
            onSubmit={actions.handleImport}
            isPending={isImporting}
            errors={errors}
          />
        ) : (
          <StudentExportForm
            classes={classes}
            closeModal={actions.handleClose}
            onSubmit={actions.handleExport}
            isPending={isExporting}
          />
        )}
      </Modal>

      <div className="table-responsive mt-4">
        <StudentTable
          students={data}
          page={page}
          isLoading={isLoading}
          status={status}
        />
      </div>

      <Pagination
        page={page}
        setPage={handlePageChange}
        totalPages={pagination.last_page}
      />
    </div>
  );
};

import React from "react";
import Modal from "@/shared/ui/modal/Modal";
import Pagination from "@/shared/ui/navigation/Pagination";
import useClass from "@/features/class/hooks/useClass";
import StudentTable from "../ui/StudentTable";
import StudentHeader from "../ui/StudentHeader";
import StudentImportForm from "../ui/StudentImportForm";
import StudentExportForm from "../ui/StudentExportForm";
import useStudent from "../hooks/useStudent";
import useStudentAction from "../hooks/useStudentAction";

const StudentPage = () => {
  const { isLoading, data, page, handlePageChange, pagination } = useStudent();
  const { data: classes } = useClass();
  const { isOpen, isImporting, isExporting, errors, actions } =
    useStudentAction();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold text-text-heading mb-2">Daftar Siswa</h1>

      <StudentHeader handleOpen={actions.handleOpen} />

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
        <StudentTable students={data} page={page} isLoading={isLoading} />
      </div>

      <Pagination
        page={page}
        setPage={handlePageChange}
        totalPages={pagination.last_page}
      />
    </div>
  );
};

export default StudentPage;

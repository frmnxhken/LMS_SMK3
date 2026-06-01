import React, { useState } from "react";
import Modal from "@/shared/ui/modal/Modal";
import Pagination from "@/shared/ui/navigation/Pagination";
import TopLoader from "@/shared/ui/Feedback/TopLoader";
import useClass from "@/features/class/hooks/useClass";
import StudentTable from "../ui/StudentTable";
import StudentHeader from "../ui/StudentHeader";
import StudentImportForm from "../ui/StudentImportForm";
import StudentExportForm from "../ui/StudentExportForm";
import useStudent from "../hooks/useStudent";
import useStudentImport from "../hooks/useStudentImport";
import useStudentExport from "../hooks/useStudentExport";

const StudentPage = () => {
  const [openImport, setOpenImport] = useState(false);
  const [openExport, setOpenExport] = useState(false);
  const { isLoading, data, page, handlePageChange, pagination } = useStudent();
  const { data: classes } = useClass();
  const { isImporting, handleImport, errors, clearErrors } = useStudentImport();
  const { mutate: exportStudents, isPending: isExporting } = useStudentExport();

  const handleCloseModal = () => {
    clearErrors();
    setOpenImport(false);
  };

  return (
    <div className="container mx-auto p-6">
      <TopLoader isLoading={isLoading} />
      <h1 className="text-xl font-bold text-text-heading mb-2">Daftar Siswa</h1>

      <StudentHeader
        openImport={openImport}
        setOpenImport={setOpenImport}
        openExport={openExport}
        setOpenExport={setOpenExport}
      />

      <Modal isOpen={openImport} onClose={handleCloseModal} title="Import Data">
        <StudentImportForm
          closeModal={handleCloseModal}
          classes={classes}
          errors={errors}
          onSubmit={handleImport}
          onPending={isImporting}
        />
      </Modal>

      <Modal
        isOpen={openExport}
        onClose={() => setOpenExport(false)}
        title="Export Data"
      >
        <StudentExportForm
          closeModal={() => setOpenExport(false)}
          classes={classes}
          onSubmit={exportStudents}
          onPending={isExporting}
        />
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

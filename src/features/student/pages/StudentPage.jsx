import React, { useState } from "react";
import StudentTable from "../ui/StudentTable";
import { useNavigate } from "react-router";
import useStudent from "../hooks/useStudent";
import StudentImportForm from "../ui/StudentImportForm";
import Modal from "@/shared/ui/modal/Modal";
import useClass from "@/features/class/hooks/useClass";
import useStudentImport from "../hooks/useStudentImport";
import StudentHeader from "../ui/StudentHeader";

const StudentPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { data } = useStudent();
  const { data: classes } = useClass();
  const { isImporting, handleSubmit, errors } = useStudentImport();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold text-text-heading mb-2">Daftar Siswa</h1>
      <StudentHeader open={open} setOpen={setOpen} />

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Tambah Mapel">
        <StudentImportForm
          closeModal={() => setOpen(false)}
          classes={classes}
          errors={errors}
          onSubmit={handleSubmit}
        />
      </Modal>

      <div className="table-responsive mt-4">
        <StudentTable students={data} />
      </div>
    </div>
  );
};

export default StudentPage;

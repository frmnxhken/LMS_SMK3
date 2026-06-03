import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import Modal from "@/shared/ui/modal/Modal";
import SubjectForm from "../ui/SubjectForm";
import SubjectTable from "../ui/SubjectTable";
import useSubject from "../hooks/useSubject";
import useSubjectCreate from "../hooks/useSubjectCreate";
import { MdAdd } from "react-icons/md";

const SubjectPage = () => {
  const [open, setOpen] = useState(false);
  const { handleSubmit, isCreating, errors, clearErrors } = useSubjectCreate();
  const { isLoading, data } = useSubject();

  const handleCloseModal = () => {
    clearErrors();
    setOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-text-heading">
          Daftar Pelajaran
        </h1>
        <Button onClick={() => setOpen(true)}>
          <MdAdd size={18} /> Tambah
        </Button>
      </div>

      <Modal isOpen={open} onClose={handleCloseModal} title="Tambah Mapel">
        <SubjectForm
          onSubmit={handleSubmit}
          onPending={isCreating}
          errors={errors}
          closeModal={handleCloseModal}
        />
      </Modal>
      <div className="table-responsive mt-4">
        <SubjectTable data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default SubjectPage;

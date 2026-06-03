import React from "react";
import Button from "@/shared/ui/buttons/Button";
import Modal from "@/shared/ui/modal/Modal";
import AcademicTable from "../ui/AcademicTable";
import AcademicForm from "../ui/AcademicForm";
import useAcademic from "../hooks/useAcademic";
import useAcademicAction from "../hooks/useAcademicAction";
import { MdAdd } from "react-icons/md";

const AcademicPage = () => {
  const { data, isLoading } = useAcademic();
  const {
    isOpen,
    selectedData,
    handleOpenCreate,
    handleEdit,
    handleClose,
    onSubmitHandler,
    onDelete,
    errors,
  } = useAcademicAction();

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold text-text-heading mb-2">
          Daftar Tahun Ajaran
        </h1>
        <Button onClick={handleOpenCreate}>
          <MdAdd size={18} />
          Tambah
        </Button>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        title={selectedData ? "Edit Tahun Akademik" : "Tambah Tahun Akademik"}
      >
        <AcademicForm
          initData={selectedData}
          onSubmit={onSubmitHandler}
          errors={errors}
        />
      </Modal>

      <div className="table-responsive mt-4">
        <AcademicTable
          academies={data}
          onEdit={handleEdit}
          onDelete={onDelete}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default AcademicPage;

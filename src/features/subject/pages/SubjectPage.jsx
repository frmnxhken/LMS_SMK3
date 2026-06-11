import React from "react";
import Modal from "@/shared/ui/modal/Modal";
import SubjectForm from "../ui/SubjectForm";
import SubjectTable from "../ui/SubjectTable";
import SubjectHeader from "../ui/SubjectHeader";
import useSubject from "../hooks/useSubject";
import useSubjectAction from "../hooks/useSubjectAction";
import { useAcademicYear } from "@/app/contexts/AcademicYearContext";

export const SubjectPage = () => {
  const { isLoading, data } = useSubject();
  const { status } = useAcademicYear();
  const { isOpen, isPending, selectedData, errors, actions } =
    useSubjectAction();

  return (
    <div className="container mx-auto p-6">
      <SubjectHeader onOpen={actions.handleOpen} status={status} />

      <Modal
        isOpen={isOpen}
        onClose={actions.handleClose}
        title={selectedData ? "Edit Mapel" : "Tambah Mapel"}
      >
        <SubjectForm
          initData={selectedData}
          onSubmit={actions.onSubmit}
          isPending={isPending}
          errors={errors}
        />
      </Modal>

      <div className="table-responsive mt-4">
        <SubjectTable
          data={data}
          isLoading={isLoading}
          onEdit={actions.onEdit}
          onDelete={actions.onDelete}
        />
      </div>
    </div>
  );
};

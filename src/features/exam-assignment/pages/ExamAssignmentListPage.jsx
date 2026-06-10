import React from "react";
import { useParams } from "react-router";
import ExamAssignmentCard from "../ui/ExamAssignmentCard";
import Button from "@/shared/ui/buttons/Button";
import Modal from "@/shared/ui/modal/Modal";
import ExamAssignmentForm from "../ui/ExamAssignmentForm";
import useExamAssignment from "../hooks/useExamAssignment";
import useExamAssignmentAction from "../hooks/useExamAssignmentAction";
import { useAuth } from "@/app/contexts/AuthContext";
import ExamAssignmentCardSkeleton from "../ui/skeletons/ExamAssignmentCardSkeleton";
import { MdAdd } from "react-icons/md";

export const ExamAssignmentListPage = () => {
  const { id_class } = useParams();
  const { user } = useAuth();
  const { data, isLoading } = useExamAssignment(id_class);
  const subjectId = data?.meta?.subject?.id;
  const {
    isOpen,
    selectedData,
    handleOpenCreate,
    handleEdit,
    handleClose,
    onSubmitHandler,
    onDelete,
  } = useExamAssignmentAction(id_class);

  return (
    <div className="p-6 container max-w-[800px] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-heading font-bold text-md sm:text-xl">
          Daftar Ujian
        </h1>
        {user.role === "teacher" && (
          <div>
            <Button onClick={handleOpenCreate}>
              <MdAdd size={18} />
              Tambah
            </Button>
          </div>
        )}
      </div>

      <Modal
        title={selectedData ? "Edit Ujian" : "Tambah Ujian"}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <ExamAssignmentForm
          subject={subjectId}
          initData={selectedData}
          onSubmit={onSubmitHandler}
        />
      </Modal>

      <div className="mt-4 space-y-3">
        {isLoading && <ExamAssignmentCardSkeleton />}
        {data?.data?.map((exam, index) => (
          <ExamAssignmentCard
            key={index}
            exam={exam}
            onEdit={handleEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

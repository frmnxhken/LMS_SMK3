import React, { useState } from "react";
import ExamAssignmentCard from "../ui/ExamAssignmentCard";
import Button from "@/shared/ui/buttons/Button";
import Modal from "@/shared/ui/modal/Modal";
import ExamAssignmentForm from "../ui/ExamAssignmentForm";

const ExamAssignmentList = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 container max-w-[800px] mx-auto">
      <div>
        <Button onClick={() => setOpen(!open)}>Tambah</Button>
      </div>
      <Modal title="Tambah Ujian" isOpen={open} onClose={() => setOpen(!open)}>
        <ExamAssignmentForm />
      </Modal>
      <div className="mt-4">
        <ExamAssignmentCard />
      </div>
    </div>
  );
};

export default ExamAssignmentList;

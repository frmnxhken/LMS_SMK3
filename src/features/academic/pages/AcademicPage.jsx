import Button from "@/shared/ui/buttons/Button";
import Modal from "@/shared/ui/modal/Modal";
import React, { useState } from "react";
import AcademicTable from "../ui/AcademicTable";
import AcademicForm from "../ui/AcademicForm";
import useAcademic from "../hooks/useAcademic";

const AcademicPage = () => {
  const { data, isLoading } = useAcademic();
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <Button onClick={() => setOpen(true)}>Tambah</Button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Tambah Tahun Akademik"
      >
        <AcademicForm />
      </Modal>
      <div className="table-responsive mt-4">
        <AcademicTable academies={data} />
      </div>
    </div>
  );
};

export default AcademicPage;

import Button from "@/shared/ui/buttons/Button";
import Modal from "@/shared/ui/modal/Modal";
import React, { useState } from "react";
import AcademicTable from "../ui/AcademicTable";
import AcademicForm from "../ui/AcademicForm";

const AcademicPage = () => {
  const [open, setOpen] = useState(false);

  const data = [
    {
      id: 1,
      tahunAkademik: "2025/2026",
      status: "aktif",
    },
    {
      id: 2,
      tahunAkademik: "2024/2025",
      status: "nonaktif",
    },
  ];
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
        <AcademicTable data={data} />
      </div>
    </div>
  );
};

export default AcademicPage;

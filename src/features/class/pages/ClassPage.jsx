import Button from "@/shared/ui/buttons/Button";
import Modal from "@/shared/ui/modal/Modal";
import React, { useState } from "react";
import useClassStore from "../hooks/useClassStore";
import ClassForm from "../ui/ClassForm";
import useClass from "../hooks/useClass";
import ClassTable from "../ui/ClassTable";

const ClassPage = () => {
  const [open, setOpen] = useState(false);
  const { handleSubmit: handleStore } = useClassStore();
  const { data, isLoading } = useClass();

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-text-heading">Daftar Kelas</h1>
        <Button onClick={() => setOpen(true)}>Tambah</Button>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Tambah Kelas">
        <ClassForm onSubmit={handleStore} closeModal={() => setOpen(false)} />
      </Modal>
      <div className="table-responsive mt-4">
        <ClassTable data={data} />
      </div>
    </div>
  );
};

export default ClassPage;

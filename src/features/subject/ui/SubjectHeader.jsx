import React from "react";
import Button from "@/shared/ui/buttons/Button";
import { MdAdd } from "react-icons/md";

const SubjectHeader = ({ onOpen, status }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-lg sm:text-xl font-bold text-text-heading">
        Daftar Pelajaran
      </h1>
      <Button disabled={status !== "draft"} onClick={onOpen}>
        <MdAdd size={18} /> Tambah
      </Button>
    </div>
  );
};

export default SubjectHeader;

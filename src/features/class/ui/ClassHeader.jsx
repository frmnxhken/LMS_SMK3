import React from "react";
import { useNavigate } from "react-router";
import { MdAdd } from "react-icons/md";
import Button from "@/shared/ui/buttons/Button";

const ClassHeader = ({ status }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-lg sm:text-xl font-bold text-text-heading">
        Daftar Kelas
      </h1>
      <Button disabled={status !== "draft"} onClick={() => navigate("create")}>
        <MdAdd size={18} />
        Tambah
      </Button>
    </div>
  );
};

export default ClassHeader;

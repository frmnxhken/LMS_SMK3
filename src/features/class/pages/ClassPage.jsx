import React from "react";
import { useNavigate } from "react-router";
import Button from "@/shared/ui/buttons/Button";
import useClass from "../hooks/useClass";
import ClassTable from "../ui/ClassTable";
import { MdAdd } from "react-icons/md";

export const ClassPage = () => {
  const navigate = useNavigate();
  const { isLoading, data } = useClass();

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-text-heading">Daftar Kelas</h1>
        <Button onClick={() => navigate("create")}>
          <MdAdd size={18} />
          Tambah
        </Button>
      </div>

      <div className="table-responsive mt-4">
        <ClassTable data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

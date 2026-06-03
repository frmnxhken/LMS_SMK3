import React from "react";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router";

const QuestionHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-6">
      <h1 className="text-heading font-bold text-md sm:text-xl mb-4">
        Bank Soal
      </h1>
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <FormInput placeholder="Cari soal atau kategori..." />
        </div>
        <Button
          onClick={() => navigate("create")}
          className="flex items-center"
        >
          <FaPlus size={14} /> Tambah Soal
        </Button>
      </div>
    </div>
  );
};

export default QuestionHeader;

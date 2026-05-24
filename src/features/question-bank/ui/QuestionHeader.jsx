import React from "react";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";
import { FaPlus } from "react-icons/fa6";

const QuestionHeader = ({ onOpen }) => {
  return (
    <div className="mb-6">
      <h1 className="text-heading font-bold text-xl mb-4">Bank Soal</h1>
      <div className="flex items-center justify-between">
        <div>
          <FormInput
            placeholder="Cari soal atau kategori..."
            onInput={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button onClick={onOpen} className="flex items-center">
          <FaPlus size={14} /> Tambah Soal
        </Button>
      </div>
    </div>
  );
};

export default QuestionHeader;

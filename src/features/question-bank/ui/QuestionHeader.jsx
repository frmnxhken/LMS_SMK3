import React from "react";
import Button from "@/shared/ui/buttons/Button";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router";

const QuestionHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-heading font-bold text-md sm:text-xl">Bank Soal</h1>
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

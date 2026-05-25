import React from "react";
import { useNavigate } from "react-router";
import { IoArrowBackOutline } from "react-icons/io5";
import Badge from "@/shared/ui/Feedback/Badge";

const ExamPrepareHeader = ({ type, title }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
      <button
        onClick={() => navigate(-1)}
        className="p-2.5 hover:bg-slate-50 border border-slate-200 rounded-xl text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
      >
        <IoArrowBackOutline size={18} />
      </button>
      <div>
        <Badge label={type} variant="success" />
        <h1 className="text-xl sm:text-2xl font-extrabold text-text-heading mt-0.5 tracking-tight">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ExamPrepareHeader;

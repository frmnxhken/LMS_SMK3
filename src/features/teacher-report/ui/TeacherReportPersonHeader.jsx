import Button from "@/shared/ui/buttons/Button";
import React from "react";
import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router";

const TeacherReportPersonHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-6 flex items-center gap-4 justify-between">
      <Button variant="outline" onClick={() => navigate(-1)}>
        <MdChevronLeft size={18} />
      </Button>
      <p className="text-xs font-semibold">Performa Siswa</p>
    </div>
  );
};

export default TeacherReportPersonHeader;

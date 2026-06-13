import React from "react";
import { useNavigate } from "react-router";
import Button from "@/shared/ui/buttons/Button";
import { MdSettings } from "react-icons/md";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import useTeacherReportExport from "../hooks/useTeacherReportExport";

const TeacherReportHeader = ({ meta, idClass }) => {
  const navigate = useNavigate();
  const { handleExport } = useTeacherReportExport();

  return (
    <div className="mb-6">
      <h1 className="text-md sm:text-xl text-text-heading font-bold">
        Data Nilai Siswa
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-baseline">
        <div>
          <p className="text-sm font-medium text-text-muted">
            Mata Pelajaran: {meta?.subject.name}
          </p>
          <p className="text-sm font-medium text-text-muted">
            Kelas : {meta?.school_class.level} {meta?.school_class.major}{" "}
            {meta?.school_class.section}
          </p>
        </div>
        <div className="flex gap-2 justify-end w-full sm:w-auto">
          <Button onClick={() => navigate("weight")} variant="outline">
            <MdSettings size={18} />
            Pengaturan Bobot
          </Button>
          <Button onClick={() => handleExport(idClass)} variant="outline">
            <PiMicrosoftExcelLogo size={18} />
            Export
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeacherReportHeader;

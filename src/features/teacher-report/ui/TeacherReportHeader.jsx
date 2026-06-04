import React from "react";
import { useNavigate } from "react-router";
import Button from "@/shared/ui/buttons/Button";
import { MdSettings } from "react-icons/md";
import { PiMicrosoftExcelLogo } from "react-icons/pi";

const TeacherReportHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-6">
      <h1 className="text-lg text-text-heading font-bold">Data Nilai Siswa</h1>
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-baseline">
        <div>
          <p className="text-sm font-medium text-text-muted">
            Mata Pelajaran: Pemerograman Web
          </p>
          <p className="text-sm font-medium text-text-muted">
            Kelas : 12 RPL 3
          </p>
        </div>
        <div className="flex gap-2 justify-end w-full sm:w-auto">
          <Button onClick={() => navigate("weight")} variant="outline">
            <MdSettings size={18} />
            Pengaturan Bobot
          </Button>
          <Button variant="outline">
            <PiMicrosoftExcelLogo size={18} />
            Export
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeacherReportHeader;

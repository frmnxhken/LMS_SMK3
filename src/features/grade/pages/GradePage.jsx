import React from "react";
import useGradeHistory from "../hooks/useGradeHistory";
import GradeTable from "../ui/GradeTable";
import { useAcademicYear } from "@/app/contexts/AcademicYearContext";

const GradePage = () => {
  const { data, isLoading } = useGradeHistory();
  const { academicYear } = useAcademicYear();

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-100 pb-4">
        <div>
          <h1 className="text-md sm:text-xl text-text-heading font-bold">
            Riwayat Nilai
          </h1>
          <p className="text-sm text-text-muted">
            Semua laporan pencapaian nilai mata pelajaran Anda
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">Tahun Ajaran: {academicYear}</p>
        </div>
      </div>

      <div className="table-responsive border-app-border">
        <GradeTable data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default GradePage;

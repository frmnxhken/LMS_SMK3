import { useAcademicYear } from "@/app/contexts/AcademicYearContext";
import React from "react";

const HomeHeader = ({ role }) => {
  const { academicYear } = useAcademicYear();

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-heading font-bold text-xl">Selamat Datang</h1>
          <p className="text-sm text-text-muted">
            {role === "student"
              ? "Siap belajar hal baru hari ini?"
              : "Siap membagikan hal baru hari ini?"}
          </p>
        </div>
        <p className="text-sm font-semibold">Tahun Ajaran: {academicYear}</p>
      </div>
    </div>
  );
};

export default HomeHeader;

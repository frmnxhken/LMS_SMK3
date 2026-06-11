import React from "react";
import { env } from "@/shared/lib/Config";

const TeacherReportPersonProfile = ({ student, subject }) => {
  return (
    <div className="flex items-center items-start gap-4">
      <div className="flex-shrink-0">
        <img
          src={env.IMAGE_URL + student?.photo}
          className="w-[50px] sm:w-[80px] h-[50px] sm:h-[80px] rounded-full object-cover"
        />
      </div>
      <div className="w-full">
        <h1 className="text-md sm:text-xl font-bold text-text-heading">
          {student?.name}
        </h1>
        <div className="grid grid-cols-2 mt-4 gap-4">
          <div>
            <h3 className="text-xs sm:text-sm font-semibold">NIS</h3>
            <p className="text-text-muted text-sm font-medium">
              {student?.nis}
            </p>
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-semibold">Kelas</h3>
            <p className="text-text-muted text-sm font-medium">
              {student?.level}
              {student?.major}
              {student?.section}
            </p>
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-semibold">Mapel</h3>
            <p className="text-text-muted text-sm font-medium">{subject}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherReportPersonProfile;

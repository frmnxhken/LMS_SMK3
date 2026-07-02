import React from "react";
import { useNavigate, useParams } from "react-router";
import { MdChevronLeft } from "react-icons/md";
import Button from "@/shared/ui/buttons/Button";
import useGradeHistorySubject from "../hooks/useGradeHistorySubject";
import GradeAssignmentTable from "../ui/GradeAssignmentTable";
import GradeDailyExamTable from "../ui/GradeDailyExamTable";

const GradeSubjectPage = () => {
  const navigate = useNavigate();
  const { subject } = useParams();
  const { data, isLoading } = useGradeHistorySubject(subject);

  return (
    <div className="max-w-[800px] container mx-auto p-6">
      <div className="flex justify-between items-center gap-2">
        <Button onClick={() => navigate(-1)} variant="outline">
          <MdChevronLeft size={18} />
        </Button>
        <h1 className="text-md sm:text-xl text-text-heading font-bold">
          {data?.subject}
        </h1>
      </div>
      <h2 className="text-sm sm:text-md text-text-heading font-semibold mt-4">
        Nilai Tugas
      </h2>
      <div className="table-responsive mt-2">
        <GradeAssignmentTable data={data?.assignments} isLoading={isLoading} />
      </div>
      <h2 className="text-sm sm:text-md text-text-heading font-semibold mt-4">
        Nilai Ujian Harian
      </h2>
      <div className="table-responsive mt-2">
        <GradeDailyExamTable data={data?.exams} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default GradeSubjectPage;

import React, { useState } from "react";
import ExamPrepareHeader from "../ui/ExamPrepareHeader";
import ExamPrepareMetaCard from "../ui/ExamPrepareMetaCard";
import ExamPrepareRules from "../ui/ExamPrepareRules";
import ExamPrepareAction from "../ui/ExamPrepareAction";
import { useNavigate, useParams } from "react-router";
import useExamDetail from "../hooks/useExamDetail";
import ExamGrade from "../ui/ExamGrade";
import useExamStart from "../hooks/useExamStart";

const ExamPreparePage = () => {
  const { id_class, id_exam } = useParams();
  const navigate = useNavigate();
  const [isAgreed, setIsAgreed] = useState(false);
  const { isLoading, data } = useExamDetail(id_class, id_exam);
  const { handleStart } = useExamStart(id_class, id_exam);
  const handleStartExam = () => handleStart();

  if (isLoading) return;
  if (data?.status === "in_progress")
    return navigate(`/course/${id_class}/exam/${id_exam}`);

  return (
    <div className="text-slate-800 p-6 md:p-12 max-w-[900px] mx-auto flex flex-col justify-between">
      <ExamPrepareHeader
        type={data?.assignment?.exam?.type}
        title={data?.assignment?.exam?.subject?.name}
      />

      {data?.status === "pending" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 flex-1">
          <ExamPrepareMetaCard
            duration={data?.assignment?.exam?.duration}
            dueDate={data?.assignment?.end_time}
          />
          <ExamPrepareRules />
        </div>
      ) : (
        <ExamGrade score={data?.score} />
      )}

      {data?.status === "pending" && (
        <ExamPrepareAction
          isAgreed={isAgreed}
          onAgreeChange={setIsAgreed}
          onStart={handleStartExam}
        />
      )}
    </div>
  );
};

export default ExamPreparePage;

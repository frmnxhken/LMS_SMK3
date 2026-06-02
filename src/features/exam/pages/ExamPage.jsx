import React, { useEffect, useState } from "react";
import ExamHeader from "../ui/ExamHeader";
import ExamQuestion from "../ui/ExamQuestion";
import ExamQuestionNav from "../ui/ExamQuestionNav";
import { useNavigate, useParams } from "react-router";
import useExamQuestion from "../hooks/useExamQuestion";

const ExamPage = () => {
  const { id_class, id_exam } = useParams();
  const { isLoading, data, isError, error } = useExamQuestion(
    id_class,
    id_exam,
  );

  const questions = data?.questions || [];
  const totalQuestions = questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const currentData = questions?.[currentQuestion - 1];
  const navigate = useNavigate();

  if (isError) {
    const errorMessage = error?.response?.data?.message;
    alert(errorMessage);
    return navigate(`/course/${id_class}/exam`);
  }

  useEffect(() => {
    if (isLoading || !data?.started_at) return;
    const startTime = new Date(data.started_at.replace(/-/g, "/")).getTime();
    const durationMinutes = data.duration || 60;
    const endTime = startTime + durationMinutes * 60 * 1000;
    if (endTime - new Date().getTime() <= 0) {
      navigate("/", { replace: true });
    }
  }, [data, isLoading, navigate]);

  if (isLoading) return;

  const handleNext = () => {
    if (currentQuestion < totalQuestions)
      setCurrentQuestion((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentQuestion > 1) setCurrentQuestion((prev) => prev - 1);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <ExamHeader
            title="Ujian Akhir Semester"
            subject="Pemrograman Web"
            startedAt={data?.started_at}
            duration={data?.duration}
            attemptId={data?.attempt_id}
          />
          <ExamQuestion
            currentQuestion={currentQuestion}
            data={currentData}
            onNext={handleNext}
            onPrev={handlePrev}
            attemptId={data?.attempt_id}
          />
        </div>

        <div className="lg:col-span-4">
          <ExamQuestionNav
            totalQuestions={totalQuestions}
            currentQuestion={currentQuestion}
            onNavigate={setCurrentQuestion}
            attemptId={data?.attempt_id}
          />
        </div>
      </div>
    </div>
  );
};

export default ExamPage;

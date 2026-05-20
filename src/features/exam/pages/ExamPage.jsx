import React, { useState } from "react";
import ExamHeader from "../ui/ExamHeader";
import ExamQuestion from "../ui/ExamQuestion";
import ExamQuestionNav from "../ui/ExamQuestionNav";
import { questions } from "@/shared/data/dummy/quest.json";

const ExamPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = questions.length;
  const currentData = questions[currentQuestion - 1];

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
            timeLeft="01:45:22"
          />
          <ExamQuestion
            currentQuestion={currentQuestion}
            data={currentData}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </div>

        <div className="lg:col-span-4">
          <ExamQuestionNav
            totalQuestions={totalQuestions}
            currentQuestion={currentQuestion}
            onNavigate={setCurrentQuestion}
          />
        </div>
      </div>
    </div>
  );
};

export default ExamPage;

import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import Button from "@/shared/ui/buttons/Button";
import useExamAnswer from "../hooks/useExamAnswer";
import useExamSubmit from "../hooks/useExamSubmit";
import { useParams } from "react-router";

const ExamQuestionNav = ({
  totalQuestions,
  currentQuestion,
  onNavigate,
  attemptId,
}) => {
  const { id_class, id_exam } = useParams();
  const { handleSubmit } = useExamSubmit(id_class, id_exam, attemptId);
  const { getAnswers } = useExamAnswer(attemptId);
  const onSubmit = () => {
    const answers = getAnswers();
    if (handleSubmit) {
      handleSubmit(answers);
    }
  };
  return (
    <div className="bg-white p-6 rounded-xl border border-app-border">
      <h3 className="text-sm font-bold text-text-muted uppercase mb-6">
        Navigasi Soal
      </h3>

      <div className="grid grid-cols-5 gap-3">
        {[...Array(totalQuestions)].map((_, i) => {
          const num = i + 1;
          return (
            <button
              key={num}
              onClick={() => onNavigate(num)}
              className={`h-10 rounded-xl text-sm font-bold transition-all border-2
                ${
                  currentQuestion === num
                    ? "bg-primary border-primary text-white"
                    : "bg-white border-app-border text-text-muted hover:border-primary"
                }`}
            >
              {num}
            </button>
          );
        })}
      </div>

      <div className="pt-6">
        <Button
          onClick={onSubmit}
          className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2"
        >
          <HiCheckCircle size={20} />
          Selesaikan Ujian
        </Button>
      </div>
    </div>
  );
};

export default ExamQuestionNav;

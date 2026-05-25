import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Button from "@/shared/ui/buttons/Button";
import Badge from "@/shared/ui/Feedback/Badge";
import useExamAnswer from "../hooks/useExamAnswer";

const ExamQuestion = ({ currentQuestion, data, onNext, onPrev, attemptId }) => {
  const { saveAnswer, selectedOptionId } = useExamAnswer(attemptId);
  const activeOptionId = selectedOptionId(data?.id);

  return (
    <div className="bg-white p-6 rounded-xl border border-app-border flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Badge label={`Soal ${currentQuestion}`}></Badge>
        </div>

        <h2 className="text-md md:text-lg font-semibold text-text-heading mb-6">
          {data?.question}
        </h2>

        <div className="space-y-4">
          {data?.options?.map((option, index) => {
            const isChecked = activeOptionId === option.id;

            return (
              <label
                key={index}
                className={`flex items-center p-4 bg-white border rounded-xl cursor-pointer transition-all group active:scale-[0.99] ${
                  isChecked
                    ? "border-primary bg-primary/5"
                    : "border-app-border hover:border-primary"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${data?.id}`}
                  checked={isChecked}
                  onChange={() => saveAnswer(data.id, option.id)}
                  className="hidden"
                />

                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold transition-all mr-4 capitalize ${
                    isChecked
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-text-muted border-app-border group-hover:border-primary"
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </div>
                <span
                  className={`font-medium transition-colors ${
                    isChecked
                      ? "text-primary"
                      : "text-text-muted group-hover:text-primary"
                  }`}
                >
                  {option?.option}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 ">
        <Button
          variant="outline"
          onClick={onPrev}
          className="flex items-center gap-2"
        >
          <HiChevronLeft /> Sebelumnya
        </Button>
        <Button onClick={onNext} className="flex items-center gap-2">
          Selanjutnya <HiChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default ExamQuestion;

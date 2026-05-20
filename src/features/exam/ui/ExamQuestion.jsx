import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Button from "@/shared/ui/buttons/Button";
import Badge from "@/shared/ui/Feedback/Badge";

const ExamQuestion = ({ currentQuestion, data, onNext, onPrev }) => {
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
          {data?.options.map((option, index) => (
            <label
              key={index}
              className="flex items-center p-4 bg-white border border-app-border hover:border-primary rounded-xl cursor-pointer transition-all group active:scale-[0.99]"
            >
              <input
                type="radio"
                name={`question-${data?.id}`}
                className="hidden peer"
              />
              <div className="w-10 h-10 rounded-xl bg-white border border-app-border flex items-center justify-center font-bold text-text-muted peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all mr-4 capitalize">
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-text-muted font-medium group-hover:text-primary transition-colors">
                {option}
              </span>
            </label>
          ))}
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

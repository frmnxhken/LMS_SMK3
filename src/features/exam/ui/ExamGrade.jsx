import React from "react";
import { HiCheckCircle } from "react-icons/hi";

const ExamGrade = ({ score }) => {
  return (
    <div className="w-full">
      <div className="bg-white p-8 rounded-2xl border border-app-border w-full text-center space-y-6">
        <div className="flex flex-col items-center space-y-3">
          <HiCheckCircle className="w-16 h-16 text-emerald-500" />
          <h1 className="text-xl font-bold text-text-heading">
            Ujian Selesai!
          </h1>
          <p className="text-sm text-text-muted">
            Terima kasih telah menyelesaikan ujian dengan jujur.
          </p>
        </div>

        <div className="py-12 bg-app-bg rounded-xl border border-app-border">
          <p className="text-xs font-bold text-text-muted uppercase tracking-wider">
            Skor Kamu
          </p>
          <p className="text-5xl font-mono font-extrabold my-1 text-emerald-600">
            {score}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExamGrade;

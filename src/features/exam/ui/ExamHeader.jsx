import React from "react";
import { HiClock } from "react-icons/hi";

const ExamHeader = ({ title, subject, timeLeft }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-app-border flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-text-heading">{title}</h1>
        <p className="text-sm text-text-muted font-medium">
          Mata Pelajaran: {subject}
        </p>
      </div>
      <div className="flex items-center gap-3 bg-amber-50 text-amber-600 px-4 py-2 rounded-xl border border-amber-100">
        <HiClock size={20} className="animate-pulse" />
        <span className="font-mono font-bold text-lg text-nowrap">
          {timeLeft}
        </span>
      </div>
    </div>
  );
};

export default ExamHeader;

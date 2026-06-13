import React from "react";
import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";

const ExamPrepareHeaderSkeleton = () => {
  return (
    <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
      <SkeletonBar className="w-10 h-10" />

      <div className="flex flex-col gap-2">
        <SkeletonBar className="w-20 h-5 rounded-md" />
        <SkeletonBar className="w-48 sm:w-80 h-7 sm:h-8" />
      </div>
    </div>
  );
};

export default ExamPrepareHeaderSkeleton;

import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";
import React from "react";

const TeacherReportPersonStatSkeleton = () => {
  return (
    <div className="bg-app-surface border border-app-border p-5 rounded-xl animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <SkeletonBar className="w-12 h-12 rounded-xl" />
        <SkeletonBar className="w-16 h-6 rounded-full" />
      </div>

      <div className="space-y-2">
        <SkeletonBar className="w-24 h-2 rounded-full" />
        <SkeletonBar className="w-32 h-6 rounded-full" />
      </div>
    </div>
  );
};

export default TeacherReportPersonStatSkeleton;

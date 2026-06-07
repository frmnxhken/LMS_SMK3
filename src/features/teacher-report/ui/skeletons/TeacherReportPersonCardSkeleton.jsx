import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";
import React from "react";

const TeacherReportPersonCardSkeleton = () => {
  return (
    <div className="bg-white p-5 rounded-xl border border-app-border animate-pulse">
      <SkeletonBar className="w-1/3 h-4 mb-4" />
      <div className="h-40 w-full flex items-end gap-4">
        <div className="w-full h-full flex flex-col justify-end">
          <SkeletonBar className="w-full h-full" />
          <div className="flex justify-between mt-4">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonBar className="w-10 h-3" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherReportPersonCardSkeleton;

import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";
import SkeletonCircle from "@/shared/ui/Feedback/SkeletonCircle";
import React from "react";

const TeacherReportPersonProfileSkeleton = () => {
  return (
    <div className="flex items-start gap-4 animate-pulse">
      <div className="flex-shrink-0">
        <SkeletonCircle className="w-[50px] sm:w-[80px] h-[50px] sm:h-[80px]" />
      </div>

      <div className="w-full">
        <SkeletonBar className="w-1/2 h-4 sm:h-6 mb-4" />
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-1">
              <SkeletonBar className="w-10 h-2 sm:h-3" />
              <SkeletonBar className="w-1/3 h-2 sm:h-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherReportPersonProfileSkeleton;

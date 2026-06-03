import React from "react";
import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";
import SkeletonCircle from "@/shared/ui/Feedback/SkeletonCircle";

const CourseCardSkeleton = ({ isTeacher = false }) => {
  return (
    <div className="bg-app-surface border border-app-border rounded-xl overflow-hidden shadow-xs">
      <div className="h-32 flex items-center p-4 relative overflow-hidden">
        <div className="w-full space-y-3">
          {isTeacher && <SkeletonBar className="w-20 h-3 sm:h-5 rounded" />}
          <SkeletonBar className="w-2/3 h-4 sm:h-6 rounded-md" />
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3">
          <SkeletonCircle radius="16px" />
          <SkeletonBar className="w-28 h-2 sm:h-4" />
        </div>

        <div className="w-full mt-5">
          <SkeletonBar className="w-full h-[42px] rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;

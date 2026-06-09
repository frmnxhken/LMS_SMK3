import React from "react";
import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";
import SkeletonCircle from "@/shared/ui/Feedback/SkeletonCircle";

const AssesmentProfileSkeleton = () => {
  return (
    <div className="w-full animate-pulse">
      <div className="flex items-center gap-4">
        <SkeletonCircle radius="50px" />
        <div className="space-y-2">
          <SkeletonBar className="h-4 w-32 " />
          <div className="flex items-center gap-2">
            <SkeletonBar className="h-3 w-3 " />
            <SkeletonBar className="h-3 w-20 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssesmentProfileSkeleton;

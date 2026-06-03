import React from "react";
import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";
import SkeletonCircle from "@/shared/ui/Feedback/SkeletonCircle";

const MemberCardSkeleton = () => {
  return (
    <div className="border border-app-border rounded-xl p-4">
      <div className="flex items-center gap-4">
        <SkeletonCircle radius="50px" />
        <div className="w-full">
          <SkeletonBar className="w-1/2 sm:w-36 h-3 sm:h-5" />
        </div>
      </div>
    </div>
  );
};

export default MemberCardSkeleton;

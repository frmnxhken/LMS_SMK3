import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";
import React from "react";

const CourseBannerSkeleton = () => {
  return (
    <div className="bg-app-surface border border-app-border h-50 rounded-xl flex items-center sm:items-end px-6 sm:px-8 py-6 relative overflow-hidden">
      <div className="w-full space-y-2">
        <SkeletonBar className="w-1/2 h-6" />
        <SkeletonBar className="w-50 h-3" />
      </div>
    </div>
  );
};

export default CourseBannerSkeleton;

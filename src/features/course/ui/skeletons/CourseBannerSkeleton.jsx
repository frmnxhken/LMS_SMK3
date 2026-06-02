import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";
import React from "react";

const CourseBannerSkeleton = () => {
  return (
    <div className="bg-app-surface border border-app-border h-50 rounded-xl flex items-center sm:items-end px-6 sm:px-8 py-6 relative overflow-hidden">
      <SkeletonBar className="w-1/2 h-6" />
    </div>
  );
};

export default CourseBannerSkeleton;

import React from "react";

const CourseBannerSkeleton = () => {
  return (
    <div className="bg-app-surface border border-app-border h-50 rounded-xl flex items-center sm:items-end px-6 sm:px-8 py-6 relative overflow-hidden">
      <div className="w-100 h-8 bg-app-bg animate-pulse"></div>
    </div>
  );
};

export default CourseBannerSkeleton;

import React from "react";
import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";

const HomeAdminCalendarSkeleton = () => {
  return (
    <ul className="border border-app-border rounded-xl divide-y divide-app-border overflow-hidden bg-white animate-pulse">
      {[...Array(7)].map((_, index) => (
        <li key={index} className="px-6 py-4">
          <div className="flex items-center gap-4">
            <SkeletonBar className="w-12 h-12" />
            <div className="flex-1 min-w-0">
              <SkeletonBar className="h-4 w-1/3 mb-2" />
              <SkeletonBar className="h-3 w-2/3" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomeAdminCalendarSkeleton;

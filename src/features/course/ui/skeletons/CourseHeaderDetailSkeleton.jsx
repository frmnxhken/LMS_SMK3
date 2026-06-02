import React from "react";
import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar"; // Sesuaikan path jika berbeda
import SkeletonCircle from "@/shared/ui/Feedback/SkeletonCircle";

const CourseHeaderDetailSkeleton = ({ type = "material" }) => {
  return (
    <div className="flex items-start gap-4 w-full">
      <SkeletonCircle />

      <div className="w-full">
        <div>
          <SkeletonBar className="w-20 h-4 rounded" />
        </div>

        <div className="mt-2 space-y-2">
          <SkeletonBar className="w-3/4 h-6" />

          <div className="space-y-1.5 pt-1">
            <SkeletonBar className="w-3/4 h-4" />
            <SkeletonBar className="w-1/2 h-4" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2 mt-2">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <SkeletonBar className="w-24 h-4" />
          </div>

          {type === "assignment" && (
            <SkeletonBar className="w-40 h-6 rounded-full" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseHeaderDetailSkeleton;

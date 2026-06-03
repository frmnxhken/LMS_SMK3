import React from "react";
import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";

const CourseAttachmentDetailSkeleton = () => {
  return (
    <div className="py-6">
      <SkeletonBar className="w-28 h-4 mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between border border-app-border rounded-xl p-4 bg-app-surface"
          >
            <div className="flex items-center w-full overflow-hidden">
              <div className="p-3 mr-4 flex-shrink-0">
                <SkeletonBar className="w-10 h-10" />
              </div>

              <div className="w-full space-y-2">
                <SkeletonBar className="w-3/4 h-3 sm:h-4" />
                <SkeletonBar className="w-1/3 h-2 sm:h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseAttachmentDetailSkeleton;

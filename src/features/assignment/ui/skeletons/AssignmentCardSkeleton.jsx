import React from "react";
import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";
import SkeletonCircle from "@/shared/ui/Feedback/SkeletonCircle";

const AssignmentCardSkeleton = ({ isTeacher = false }) => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="bg-app-surface border border-app-border rounded-xl p-4">
          <div className="flex flex-col sm:flex-row items-start gap-4 justify-between">
            <div className="flex items-center gap-4 w-full sm:w-auto flex-1">
              <div className="p-3 rounded-full flex-shrink-0">
                <SkeletonCircle />
              </div>
              <div className="flex flex-col w-full space-y-2">
                <SkeletonBar className="w-3/4 sm:w-64 h-5 mt-1" />
                <div className="flex items-center gap-x-2 text-[11px] mt-1">
                  <SkeletonBar className="w-16 h-3" />
                  <span className="text-neutral-300">-</span>
                  <SkeletonBar className="w-16 h-3" />
                </div>
              </div>
            </div>
            {isTeacher && (
              <div className="w-full sm:w-auto pt-2 sm:pt-0 flex-shrink-0">
                <SkeletonBar className="w-full sm:w-36 h-9 rounded-lg" />
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default AssignmentCardSkeleton;

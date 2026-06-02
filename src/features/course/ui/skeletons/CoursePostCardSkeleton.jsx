import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";
import React from "react";

const CoursePostCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <SkeletonBar key={index} className="w-full h-26" />
      ))}
    </>
  );
};

export default CoursePostCardSkeleton;

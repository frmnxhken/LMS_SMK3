import React from "react";
import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";

const QuestionListCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <SkeletonBar key={index} className="w-full h-26" />
      ))}
    </>
  );
};

export default QuestionListCardSkeleton;

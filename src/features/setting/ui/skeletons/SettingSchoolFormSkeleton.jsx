import React from "react";
import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";

const SettingSchoolFormSkeleton = () => {
  return (
    <div className="space-y-4">
      <SkeletonBar className="w-full h-10" />
      <SkeletonBar className="w-full h-10" />
      <SkeletonBar className="w-full h-10" />
      <SkeletonBar className="w-25 h-10" />
    </div>
  );
};

export default SettingSchoolFormSkeleton;

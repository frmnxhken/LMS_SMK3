import React from "react";

const SkeletonCircle = ({ radius = "45px", className = "" }) => {
  return (
    <div
      className={`bg-neutral-200 rounded-full animate-pulse flex-shrink-0 ${className}`}
      style={{ width: radius, height: radius }}
    ></div>
  );
};

export default SkeletonCircle;

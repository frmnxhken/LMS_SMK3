import React from "react";

const SkeletonBar = ({ className }) => {
  return (
    <div
      className={`bg-neutral-200 rounded-lg animate-pulse ${className}`}
    ></div>
  );
};

export default SkeletonBar;

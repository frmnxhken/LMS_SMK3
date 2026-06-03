import React from "react";
import { IoLibrary } from "react-icons/io5";

const CourseBanner = ({ name, nameClass }) => {
  return (
    <div className="bg-app-surface border border-app-border h-50 rounded-xl flex items-center sm:items-end px-6 sm:px-8 py-6 relative overflow-hidden">
      <div className="w-full">
        <h3 className="text-lg sm:text-2xl font-bold w-3/4 sm:w-1/2 text-text-heading leading-tight">
          {name}
        </h3>
        <h3 className="text-md font-bold w-3/4 sm:w-1/2 text-text-heading leading-tight">
          {nameClass}
        </h3>
      </div>
      <IoLibrary className="text-blue-400 text-7xl absolute -bottom-2 right-4 rotate-1" />
    </div>
  );
};

export default CourseBanner;

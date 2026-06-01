import React from "react";
import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";

const SubjectTableSkeleton = () => {
  return (
    <tbody>
      {Array.from({ length: 5 }).map((_, index) => (
        <tr key={`skeleton-${index}`} className="table-body-row">
          <td className="table-body-cell">
            <SkeletonBar className="h-4 w-6" />
          </td>
          <td className="table-body-cell">
            <SkeletonBar className="h-4 w-20" />
          </td>
          <td className="table-body-cell flex space-x-2">
            <SkeletonBar className="h-8 w-14" />
            <SkeletonBar className="h-8 w-16" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default SubjectTableSkeleton;

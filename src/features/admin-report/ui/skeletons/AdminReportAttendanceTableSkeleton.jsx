import React from "react";
import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";

const AdminReportAttendanceTableSkeleton = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <tr key={`skeleton-${index}`} className="table-body-row">
          <td className="table-body-cell">
            <SkeletonBar className="h-4 w-6" />
          </td>
          <td className="table-body-cell">
            <SkeletonBar className="h-4 w-20" />
          </td>
          <td className="table-body-cell">
            <SkeletonBar className="h-4 w-20" />
          </td>
          <td className="table-body-cell">
            <SkeletonBar className="h-4 w-20" />
          </td>
          <td className="table-body-cell">
            <SkeletonBar className="h-8 w-14" />
          </td>
        </tr>
      ))}
    </>
  );
};

export default AdminReportAttendanceTableSkeleton;

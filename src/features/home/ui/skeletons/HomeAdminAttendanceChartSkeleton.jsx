import React from "react";
import Button from "@/shared/ui/buttons/Button";
import SkeletonBar from "@/shared/ui/Feedback/SkeletonBar";

const HomeAdminAttendanceChartSkeleton = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-text-heading">Absensi Hari Ini</h3>
        <Button variant="outline">Lihat Semua</Button>
      </div>

      <div className="p-6 rounded-xl border border-app-border">
        <div className="h-80 w-full flex items-center justify-center relative mb-6">
          <div className="w-60 h-60 rounded-full border-[40px] border-neutral-200 flex items-center justify-center">
            <div className="text-center">
              <SkeletonBar className="h-8 w-16 mb-1 mx-auto" />
              <SkeletonBar className="h-3 w-10 mx-auto" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <SkeletonBar className="w-3 h-3" />
              <SkeletonBar className="h-3 w-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAdminAttendanceChartSkeleton;

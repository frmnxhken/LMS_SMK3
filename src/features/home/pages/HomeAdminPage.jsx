import React from "react";
import HomeAdminStat from "../ui/HomeAdminStat";
import HomeAdminAttendanceChart from "../ui/HomeAdminAttendanceChart";
import HomeAdminCalendar from "../ui/HomeAdminCalendar";

const HomeAdminPage = () => {
  return (
    <div className="p-6">
      <HomeAdminStat />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-5 gap-4">
        <div className="col-span-3 sm:col-span-2">
          <HomeAdminAttendanceChart />
        </div>
        <div className="w-full col-span-3">
          <HomeAdminCalendar />
        </div>
      </div>
    </div>
  );
};

export default HomeAdminPage;

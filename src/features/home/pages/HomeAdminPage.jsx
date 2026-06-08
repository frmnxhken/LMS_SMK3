import React from "react";
import HomeAdminStat from "../ui/HomeAdminStat";
import HomeAdminAttendanceChart from "../ui/HomeAdminAttendanceChart";
import HomeAdminCalendar from "../ui/HomeAdminCalendar";
import useAdminWeeklyCalendar from "../hooks/useAdminWeeklyCalendar";
import useAdminStat from "../hooks/useAdminStat";
import useAdminReportSummaryToday from "@/features/admin-report/hooks/useAdminReportSummaryToday";
import HomeAdminCalendarSkeleton from "../ui/skeletons/HomeAdminCalendarSkeleton";
import HomeAdminAttendanceChartSkeleton from "../ui/skeletons/HomeAdminAttendanceChartSkeleton";

const HomeAdminPage = () => {
  const { data: calendars, isLoading: loadingCalendar } =
    useAdminWeeklyCalendar();
  const { data: stats } = useAdminStat();
  const { data: attendance, isLoading: loadingSummary } =
    useAdminReportSummaryToday();

  return (
    <div className="p-6">
      <HomeAdminStat stats={stats} />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-5 gap-4">
        <div className="col-span-3 sm:col-span-2">
          {loadingSummary ? (
            <HomeAdminAttendanceChartSkeleton />
          ) : (
            <HomeAdminAttendanceChart attendance={attendance} />
          )}
        </div>
        <div className="w-full col-span-3">
          {loadingCalendar ? (
            <HomeAdminCalendarSkeleton />
          ) : (
            <HomeAdminCalendar calendars={calendars} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeAdminPage;

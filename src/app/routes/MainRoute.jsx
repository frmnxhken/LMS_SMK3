import React from "react";
import { Route } from "react-router";

import MainLayout from "../layout/MainLayout";
import CourseRoute from "./CourseRoute";
import ProtectedRoute from "./ProtectedRoute";

import CalendarPage from "@/features/calendar/pages/CalendarPage";
import AttendancePage from "@/features/attendance/pages/AttendancePage";
import HomePage from "@/features/home/pages/HomePage";

const MainRoute = () => {
  return (
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      {CourseRoute()}
      <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
      </Route>
    </Route>
  );
};

export default MainRoute;

import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import CalendarPage from "@/pages/public/CalendarPage";
import CourseRoute from "./CourseRoute";
import ProtectedRoute from "./ProtectedRoute";
import AttendancePage from "@/features/attendance/pages/AttendancePage";
import { HomePage } from "@/pages/public/home";

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

import React from "react";
import { Route } from "react-router";

import MainLayout from "../layout/MainLayout";
import CourseRoute from "./CourseRoute";
import ProtectedRoute from "./ProtectedRoute";

import CalendarPage from "@/features/calendar/pages/CalendarPage";
import AttendancePage from "@/features/attendance/pages/AttendancePage";
import HomePage from "@/features/home/pages/HomePage";
import QuestionBuildPage from "@/features/question-bank/pages/QuestionBuildPage";
import QuestionList from "@/features/question-bank/pages/QuestionList";
import { ProfilePage } from "@/features/profile/pages/ProfilePage";
import { ChangePasswordPage } from "@/features/profile/pages/ChangePasswordPage";

const MainRoute = () => {
  return (
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/change-password" element={<ChangePasswordPage />} />
      {CourseRoute()}
      <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
        <Route path="/question-bank" element={<QuestionList />} />
        <Route path="/question-bank/create" element={<QuestionBuildPage />} />
      </Route>
      <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
      </Route>
    </Route>
  );
};

export default MainRoute;

import React from "react";
import { Route } from "react-router";

import MainLayout from "../layout/MainLayout";
import CourseRoute from "./CourseRoute";
import ProtectedRoute from "./ProtectedRoute";

import AttendancePage from "@/features/attendance/pages/AttendancePage";
import HomePage from "@/features/home/pages/HomePage";
import { ProfilePage } from "@/features/profile/pages/ProfilePage";
import { ChangePasswordPage } from "@/features/profile/pages/ChangePasswordPage";
import QuizBuilderPage from "@/features/quiz-builder/pages/QuizBuilderPage";
import QuestionListPage from "@/features/question-bank/pages/QuestionListPage";
import QuestionCreatePage from "@/features/question-bank/pages/QuestionCreatePage";
import QuestionEditPage from "@/features/question-bank/pages/QuestionEditPage";
import TaskPage from "@/features/task/pages/TaskPage";
import TaskCalendarPage from "@/features/task/pages/TaskCalendarPage";

const MainRoute = () => {
  return (
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/change-password" element={<ChangePasswordPage />} />
      {CourseRoute()}
      <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
        <Route path="/question-bank">
          <Route path="" element={<QuestionListPage />} />
          <Route path="create" element={<QuestionCreatePage />} />
          <Route path=":id/edit" element={<QuestionEditPage />} />
          <Route path=":id/create" element={<QuizBuilderPage />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
        <Route path="/task" element={<TaskPage />} />
        <Route path="/calendar" element={<TaskCalendarPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
      </Route>
    </Route>
  );
};

export default MainRoute;

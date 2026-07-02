import React from "react";
import { Route } from "react-router";

import MainLayout from "../layout/MainLayout";
import CourseRoute from "./CourseRoute";
import ProtectedRoute from "./ProtectedRoute";

import { AttendancePage } from "@/features/attendance";
import { HomePage } from "@/features/home";
import { ProfilePage, ChangePasswordPage } from "@/features/profile";
import { QuizBuilderPage } from "@/features/quiz-builder";
import {
  QuestionListPage,
  QuestionCreatePage,
  QuestionEditPage,
} from "@/features/question-bank";
import { TaskPage, TaskCalendarPage } from "@/features/task";
import GradePage from "@/features/grade/pages/GradePage";
import GradeSubjectPage from "@/features/grade/pages/GradeSubjectPage";

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
        <Route path="/grade" element={<GradePage />} />
        <Route path="/grade/:subject" element={<GradeSubjectPage />} />
      </Route>
    </Route>
  );
};

export default MainRoute;

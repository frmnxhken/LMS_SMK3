import React from "react";
import { Route } from "react-router";
import MainLayout from "../layout/MainLayout";
import { AcademicPage } from "@/features/academic";
import {
  StudentPage,
  StudentCreatePage,
  StudentEditPage,
} from "@/features/student";
import { SubjectPage } from "@/features/subject";
import {
  TeachingAssignmentPage,
  TeachingAssignmentCreatePage,
  TeachingAssignmentEditPage,
} from "@/features/teaching-assignment";
import { HomeAdminPage } from "@/features/home";
import { ClassPage, ClassCreatePage, ClassEditPage } from "@/features/class";
import {
  TeacherCreatePage,
  TeacherEditPage,
  TeacherPage,
} from "@/features/teacher";
import { AcademicCalendarPage } from "@/features/academic-calendar";
import { ProfilePage, ChangePasswordPage } from "@/features/profile";
import {
  AdminReportAttendancePage,
  AdminReportHistoryPage,
  AdminReportExportPage,
} from "@/features/admin-report";
import SettingSchoolPage from "@/features/setting/pages/SettingSchoolPage";

const AdminRoute = () => {
  return (
    <Route path="/dashboard" element={<MainLayout />}>
      <Route index element={<HomeAdminPage />} />
      <Route path="academic">
        <Route index element={<AcademicPage />} />
        <Route path="calendar" element={<AcademicCalendarPage />} />
      </Route>

      <Route path="class">
        <Route index element={<ClassPage />} />
        <Route path="create" element={<ClassCreatePage />} />
        <Route path=":id/edit" element={<ClassEditPage />} />
      </Route>

      <Route path="student">
        <Route index element={<StudentPage />} />
        <Route path="create" element={<StudentCreatePage />} />
        <Route path=":id/edit" element={<StudentEditPage />} />
      </Route>

      <Route path="teacher">
        <Route index element={<TeacherPage />} />
        <Route path="create" element={<TeacherCreatePage />} />
        <Route path=":id/edit" element={<TeacherEditPage />} />
      </Route>

      <Route path="teaching-assignment">
        <Route index element={<TeachingAssignmentPage />} />
        <Route path="create" element={<TeachingAssignmentCreatePage />} />
        <Route path=":id/edit" element={<TeachingAssignmentEditPage />} />
      </Route>

      <Route path="attendance">
        <Route index element={<AdminReportAttendancePage />} />
        <Route path="history" element={<AdminReportHistoryPage />} />
        <Route path="export" element={<AdminReportExportPage />} />
      </Route>

      <Route path="profile">
        <Route index element={<ProfilePage />} />
        <Route path="change-password" element={<ChangePasswordPage />} />
      </Route>

      <Route path="subject" element={<SubjectPage />} />
      <Route path="setting" element={<SettingSchoolPage />} />
    </Route>
  );
};

export default AdminRoute;

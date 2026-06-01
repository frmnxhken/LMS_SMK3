import React from "react";
import { Route } from "react-router";
import MainLayout from "../layout/MainLayout";
import AcademicPage from "@/features/academic/pages/AcademicPage";
import StudentPage from "@/features/student/pages/StudentPage";
import StudentCreatePage from "@/features/student/pages/StudentCreatePage";
import SubjectPage from "@/features/subject/pages/SubjectPage";
import TeachingAssignmentPage from "@/features/teaching-assignment/pages/TeachingAssignmentPage";
import TeachingAssignmentCreatePage from "@/features/teaching-assignment/pages/TeachingAssignmentCreatePage";
import HomeAdminPage from "@/features/home/pages/HomeAdminPage";
import StudentEditPage from "@/features/student/pages/StudentEditPage";
import { ClassPage, ClassCreatePage, ClassEditPage } from "@/features/class";
import {
  TeacherCreatePage,
  TeacherEditPage,
  TeacherPage,
} from "@/features/teacher";

const AdminRoute = () => {
  return (
    <Route path="/dashboard" element={<MainLayout />}>
      <Route index element={<HomeAdminPage />} />
      <Route path="academic" element={<AcademicPage />} />
      <Route path="class" element={<ClassPage />} />
      <Route path="class/create" element={<ClassCreatePage />} />
      <Route path="class/:id/edit" element={<ClassEditPage />} />
      <Route path="subject" element={<SubjectPage />} />
      <Route path="student" element={<StudentPage />} />
      <Route path="student/create" element={<StudentCreatePage />} />
      <Route path="student/:id/edit" element={<StudentEditPage />} />
      <Route path="teacher" element={<TeacherPage />} />
      <Route path="teacher/create" element={<TeacherCreatePage />} />
      <Route path="teacher/:id/edit" element={<TeacherEditPage />} />
      <Route path="teaching-assignment" element={<TeachingAssignmentPage />} />
      <Route
        path="teaching-assignment/create"
        element={<TeachingAssignmentCreatePage />}
      />
    </Route>
  );
};

export default AdminRoute;

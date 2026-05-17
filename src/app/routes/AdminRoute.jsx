import React from "react";
import { Route } from "react-router";
import MainLayout from "../layout/MainLayout";
import AcademicPage from "@/features/academic/pages/AcademicPage";
import ClassPage from "@/features/class/pages/ClassPage";
import StudentPage from "@/features/student/pages/StudentPage";
import StudentCreatePage from "@/features/student/pages/StudentCreatePage";
import SubjectPage from "@/features/subject/pages/SubjectPage";
import TeachingAssignmentPage from "@/features/teaching-assignment/pages/TeachingAssignmentPage";
import TeacherPage from "@/features/teacher/pages/TeacherPage";
import TeachingAssignmentCreatePage from "@/features/teaching-assignment/pages/TeachingAssignmentCreatePage";
import HomeAdminPage from "@/features/home/pages/HomeAdminPage";

const AdminRoute = () => {
  return (
    <Route path="/dashboard" element={<MainLayout />}>
      <Route index element={<HomeAdminPage />} />
      <Route path="academic" element={<AcademicPage />} />
      <Route path="class" element={<ClassPage />} />
      <Route path="subject" element={<SubjectPage />} />
      <Route path="student" element={<StudentPage />} />
      <Route path="student/create" element={<StudentCreatePage />} />
      <Route path="student/:id/edit" element={<StudentCreatePage />} />
      <Route path="teacher" element={<TeacherPage />} />
      <Route path="teaching-assignment" element={<TeachingAssignmentPage />} />
      <Route
        path="teaching-assignment/create"
        element={<TeachingAssignmentCreatePage />}
      />
    </Route>
  );
};

export default AdminRoute;

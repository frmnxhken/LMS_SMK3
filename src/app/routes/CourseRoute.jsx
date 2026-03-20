import React from "react";
import { Route } from "react-router";
import CourseLayout from "../layout/CourseLayout";
import CoursePage from "@/features/course/pages/CoursePage";
import CourseDetail from "@/features/course/pages/CourseDetailPage";
import MemberPage from "@/features/member/pages/MemberPage";
import ProtectedRoute from "./ProtectedRoute";
import MaterialEditPage from "@/features/material/pages/MaterialEditPage";
import MaterialCreatePage from "@/features/material/pages/MaterialCreatePage";
import AssignmentCreatePage from "@/features/assignment/pages/AssignmentCreatePage";
import AssignmentEditPage from "@/features/assignment/pages/AssignmentEditPage";
import AssignmentListPage from "@/features/assignment/pages/AssignmentListPage";
import AssesmentPage from "@/features/assesment/pages/AssesmentPage";
import AssesmentDetailPage from "@/features/assesment/pages/AssesmentDetailPage";

const CourseRoute = () => {
  return (
    <Route path="/course/:id_class" element={<CourseLayout />}>
      <Route index element={<CoursePage />} />
      <Route path="post/:id_post" element={<CourseDetail />} />
      <Route path="member" element={<MemberPage />} />
      <Route path="assignment" element={<AssignmentListPage />} />
      <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
        <Route path="material/create" element={<MaterialCreatePage />} />
        <Route path="assignment/create" element={<AssignmentCreatePage />} />
        <Route path="material/:id_post/edit" element={<MaterialEditPage />} />
        <Route
          path="assignment/:id_post/edit"
          element={<AssignmentEditPage />}
        />
        <Route
          path="assignment/:id_post/assesment"
          element={<AssesmentPage />}
        />
        <Route
          path="assignment/:id_post/assesment/:id_submission"
          element={<AssesmentDetailPage />}
        />
      </Route>
    </Route>
  );
};

export default CourseRoute;

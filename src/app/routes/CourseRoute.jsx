import React from "react";
import { Route } from "react-router";

import CourseLayout from "../layout/CourseLayout";
import ProtectedRoute from "./ProtectedRoute";

import CoursePage from "@/features/course/pages/CoursePage";
import CourseDetail from "@/features/course/pages/CourseDetailPage";
import MemberPage from "@/features/member/pages/MemberPage";
import MaterialEditPage from "@/features/material/pages/MaterialEditPage";
import MaterialCreatePage from "@/features/material/pages/MaterialCreatePage";
import AssignmentCreatePage from "@/features/assignment/pages/AssignmentCreatePage";
import AssignmentEditPage from "@/features/assignment/pages/AssignmentEditPage";
import AssignmentListPage from "@/features/assignment/pages/AssignmentListPage";
import AssessmentPage from "@/features/assesment/pages/AssessmentPage";
import AssessmentDetailPage from "@/features/assesment/pages/AssessmentDetailPage";

const CourseRoute = () => {
  return (
    <Route path="/course/:id_class" element={<CourseLayout />}>
      <Route element={<ProtectedRoute allowedRoles={["teacher", "student"]} />}>
        <Route index element={<CoursePage />} />
        <Route path="post/:id_post" element={<CourseDetail />} />
        <Route path="member" element={<MemberPage />} />
        <Route path="assignment" element={<AssignmentListPage />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
        <Route path="material">
          <Route path="create" element={<MaterialCreatePage />} />
          <Route path=":id_post/edit" element={<MaterialEditPage />} />
        </Route>

        <Route path="assignment">
          <Route path="create" element={<AssignmentCreatePage />} />
          <Route path=":id_post">
            <Route path="edit" element={<AssignmentEditPage />} />
            <Route path="assessment" element={<AssessmentPage />} />
            <Route
              path="assessment/:id_submission"
              element={<AssessmentDetailPage />}
            />
          </Route>
        </Route>
      </Route>
    </Route>
  );
};

export default CourseRoute;

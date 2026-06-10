import React from "react";
import { Route } from "react-router";

import CourseLayout from "../layout/CourseLayout";
import ProtectedRoute from "./ProtectedRoute";

import { CoursePage, CourseDetailPage } from "@/features/course";
import { MemberPage } from "@/features/member";
import { MaterialCreatePage, MaterialEditPage } from "@/features/material";
import {
  AssignmentCreatePage,
  AssignmentEditPage,
  AssignmentListPage,
} from "@/features/assignment";
import { AssessmentPage, AssessmentDetailPage } from "@/features/assessment";
import { ExamAssignmentListPage } from "@/features/exam-assignment";
import { ExamPreparePage, ExamPage } from "@/features/exam";
import {
  TeacherReportPage,
  TeacherReportPerformancePage,
} from "@/features/teacher-report";
import { WeightScorePage } from "@/features/weight-score";

const CourseRoute = () => {
  return (
    <Route path="/course/:id_class" element={<CourseLayout />}>
      <Route element={<ProtectedRoute allowedRoles={["teacher", "student"]} />}>
        <Route index element={<CoursePage />} />
        <Route path="post/:id_post" element={<CourseDetailPage />} />
        <Route path="member" element={<MemberPage />} />
        <Route path="assignment" element={<AssignmentListPage />} />
        <Route path="exam" element={<ExamAssignmentListPage />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
        <Route path="exam/:id_exam" element={<ExamPage />} />
        <Route path="exam/:id_exam/prepare" element={<ExamPreparePage />} />
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

        <Route path="report" element={<TeacherReportPage />} />
        <Route path="report/weight" element={<WeightScorePage />} />
        <Route
          path="report/:id_student/student"
          element={<TeacherReportPerformancePage />}
        />
      </Route>
    </Route>
  );
};

export default CourseRoute;

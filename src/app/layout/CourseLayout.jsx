import React from "react";
import CourseNav from "@/shared/ui/navigation/CourseNav";
import { Outlet } from "react-router";

const CourseLayout = () => {
  return (
    <>
      <CourseNav />
      <Outlet />
    </>
  );
};

export default CourseLayout;

import React from "react";
import CourseCard from "@/features/course/ui/CourseCard";
import CourseCardSkeleton from "@/features/course/ui/skeletons/CourseCardSkeleton";

const HomeCourse = ({ courses, isLoading, role }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-8 gap-x-4 gap-y-6">
      {isLoading
        ? [1, 2, 3].map((i) => <CourseCardSkeleton key={i} isTeacher />)
        : courses?.map((course, index) => (
            <CourseCard
              key={index}
              id={course.id}
              subject={course.subject}
              teacher={course.teacher}
              class_name={role === "teacher" ? course.class_name : null}
              index={index}
            />
          ))}
    </div>
  );
};

export default HomeCourse;

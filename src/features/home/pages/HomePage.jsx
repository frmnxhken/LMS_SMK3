import React from "react";
import { useAuth } from "@/app/contexts/AuthContext";
import HomeHeader from "../ui/HomeHeader";
import HomeStat from "../ui/HomeStat";
import HomeCourseList from "../ui/HomeCourseList";
import useHome from "../hooks/useHome";
import HomeCourse from "../ui/HomeCourse";

const HomePage = () => {
  const { user } = useAuth();
  const { courses, isLoading } = useHome();

  return (
    <div className="p-6">
      <HomeHeader role={user.role} />
      {user.role === "student" && <HomeStat />}
      {user.role === "student" ? (
        <HomeCourseList courses={courses} isLoading={isLoading} />
      ) : (
        <HomeCourse courses={courses} isLoading={isLoading} />
      )}
    </div>
  );
};

export default HomePage;

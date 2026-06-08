import React from "react";
import { useAuth } from "@/app/contexts/AuthContext";
import HomeHeader from "../ui/HomeHeader";
import useHome from "../hooks/useHome";
import HomeCourse from "../ui/HomeCourse";

const HomePage = () => {
  const { user } = useAuth();
  const { courses, isLoading } = useHome();

  return (
    <div className="p-6">
      <HomeHeader role={user.role} />
      <HomeCourse courses={courses} isLoading={isLoading} role={user.role} />
    </div>
  );
};

export default HomePage;

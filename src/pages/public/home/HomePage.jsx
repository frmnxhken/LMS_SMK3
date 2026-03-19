import React from "react";
import HomeStat from "./ui/HomeStat";
import HomeCourseList from "./ui/HomeCourseList";
import HomeHeader from "./ui/HomeHeader";
import useHome from "./hooks/useHome";

const HomePage = () => {
  const { courses, isLoading } = useHome();

  return (
    <div className="p-6">
      <HomeHeader />
      <HomeStat />
      <HomeCourseList courses={courses} />
    </div>
  );
};

export default HomePage;

import useCourses from "@/features/course/hooks/useCourses";

const useHome = () => {
  const coursesQuery = useCourses();

  return {
    courses: coursesQuery.data,
    isLoading: coursesQuery.isLoading,
    isError: coursesQuery.isError,
  };
};

export default useHome;

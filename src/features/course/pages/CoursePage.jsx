import React from "react";
import Dropdown from "@/shared/ui/buttons/DropDown";
import Button from "@/shared/ui/buttons/Button";
import { useAuth } from "@/app/contexts/AuthContext";
import { useParams } from "react-router";
import useCoursePosts from "../hooks/useCoursePosts";
import CourseBanner from "../ui/CourseBanner";
import { useCourseAction } from "../hooks/useCourseAction";
import CoursePostCard from "../ui/CoursePostCard";

const CoursePage = () => {
  const { id_class } = useParams();
  const { user } = useAuth();
  const { data } = useCoursePosts(id_class);
  const actionMenus = useCourseAction();

  return (
    <>
      <div className="max-w-[980px] container mx-auto p-6">
        <CourseBanner name={data?.[0].subject} />
        <div className="flex flex-col sm:flex-row justify-between gap-6 mt-4">
          <div className="w-60 hidden sm:block"></div>
          <div className="w-full space-y-4">
            {user.role === "teacher" && (
              <Dropdown
                trigger={<Button variant="outline">Buat Postingan</Button>}
                menuItems={actionMenus}
                align="left"
              />
            )}
            {data?.[0].posts?.map((post) => (
              <CoursePostCard {...post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePage;

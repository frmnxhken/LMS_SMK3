import React from "react";
import Dropdown from "@/shared/ui/buttons/DropDown";
import Button from "@/shared/ui/buttons/Button";
import { useAuth } from "@/app/contexts/AuthContext";
import { Link, useParams } from "react-router";
import useCoursePosts from "../hooks/useCoursePosts";
import CourseBanner from "../ui/CourseBanner";
import { useCourseAction } from "../hooks/useCourseAction";
import CoursePostCard from "../ui/CoursePostCard";
import CoursePostCardSkeleton from "../ui/skeletons/CoursePostCardSkeleton";
import CourseBannerSkeleton from "../ui/skeletons/CourseBannerSkeleton";

export const CoursePage = () => {
  const { id_class } = useParams();
  const { user } = useAuth();
  const { isLoading, data } = useCoursePosts(id_class);
  const actionMenus = useCourseAction();

  return (
    <>
      <div className="max-w-[980px] container mx-auto p-6">
        {isLoading ? (
          <CourseBannerSkeleton />
        ) : (
          <CourseBanner name={data?.[0].subject} />
        )}
        <div className="flex flex-col sm:flex-row justify-between gap-6 mt-4">
          <div className="w-60 hidden sm:block"></div>
          <div className="w-full space-y-4">
            {user.role === "teacher" && (
              <div className="flex items-center justify-between">
                <Dropdown
                  trigger={<Button variant="outline">Buat Postingan</Button>}
                  menuItems={actionMenus}
                  align="left"
                />
                <Link
                  to="member"
                  className="text-sm font-semibold text-primary underline"
                >
                  Lihat Anggota
                </Link>
              </div>
            )}
            {isLoading &&
              [1, 2, 3, 4].map((sk) => <CoursePostCardSkeleton key={sk} />)}
            {data?.[0].posts?.map((post, index) => (
              <CoursePostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

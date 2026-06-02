import React, { useState } from "react";
import { useParams } from "react-router";
import useCoursePostDetail from "../hooks/useCoursePostDetail";
import CommentSection from "../ui/CommentSection";
import CourseHeaderDetail from "../ui/CourseHeaderDetail";
import CommentInput from "../ui/CommentInput";
import CourseAttachmentDetail from "../ui/CourseAttachmentDetail";
import CourseSideDetail from "../ui/CourseSideDetail";
import CourseDocViewer from "../ui/CourseDocViewer";
import CourseHeaderDetailSkeleton from "../ui/skeletons/CourseHeaderDetailSkeleton";
import CourseAttachmentDetailSkeleton from "../ui/skeletons/CourseAttachmentDetailSkeleton";
import TopLoader from "@/shared/ui/Feedback/TopLoader";

export const CourseDetail = () => {
  const { id_class, id_post } = useParams();
  const { data, isLoading } = useCoursePostDetail(id_class, id_post);
  const [isOpen, setIsOpen] = useState(false);
  const [docView, setDocView] = useState(null);
  const type = data?.type;
  const files = data?.post_files;
  const submission = data?.submissions?.[0];
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div
      className={`container relative ${type === "assignment" ? "max-w-[1080px]" : "max-w-[780px]"} mx-auto py-6 px-4 flex flex-col sm:flex-row gap-4 justify-between`}
    >
      <TopLoader isLoading={isLoading} />
      <div className="w-full">
        {isLoading ? (
          <CourseHeaderDetailSkeleton />
        ) : (
          <CourseHeaderDetail
            type={type}
            title={data?.title}
            content={data?.content}
            created_at={data?.created_at}
            due={data?.due}
            toggle={() => setIsOpen(!isOpen)}
          />
        )}

        <CourseDocViewer file={docView} onClose={() => setDocView(null)} />

        <div className="hidden sm:block">
          <CommentInput />
        </div>

        {isLoading ? (
          <CourseAttachmentDetailSkeleton />
        ) : (
          <CourseAttachmentDetail
            files={files}
            onView={(file) => setDocView(file)}
          />
        )}
        <CommentSection isOpen={isOpen} toggle={handleToggle} />
      </div>
      <CourseSideDetail type={type} submission={submission} />
    </div>
  );
};

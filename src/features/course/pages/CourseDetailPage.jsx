import React, { useState } from "react";
import { useParams } from "react-router";
import useCoursePostDetail from "../hooks/useCoursePostDetail";
import CommentSection from "../ui/CommentSection";
import CourseHeaderDetail from "../ui/CourseHeaderDetail";
import CommentInput from "../ui/CommentInput";
import CourseAttachmentDetail from "../ui/CourseAttachmentDetail";
import CourseSideDetail from "../ui/CourseSideDetail";

const CourseDetail = () => {
  const { id_class, id_post } = useParams();
  const { data } = useCoursePostDetail(id_class, id_post);
  const [isOpen, setIsOpen] = useState(false);
  const type = data?.type;
  const files = data?.post_files;
  const submission = data?.submissions?.[0];
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div
      className={`container relative ${type === "assignment" ? "max-w-[1080px]" : "max-w-[780px]"} mx-auto py-6 px-4 flex flex-col sm:flex-row gap-4 justify-between`}
    >
      <div className="w-full">
        <CourseHeaderDetail
          type={type}
          title={data?.title}
          content={data?.content}
          created_at={data?.created_at}
          due={data?.due}
          toggle={() => setIsOpen(!isOpen)}
        />

        <CommentInput />
        <CourseAttachmentDetail files={files} />
        <CommentSection isOpen={isOpen} toggle={handleToggle} />
      </div>
      <CourseSideDetail type={type} submission={submission} />
    </div>
  );
};

export default CourseDetail;

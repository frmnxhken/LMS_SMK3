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
  const type = data?.type;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`container relative ${type === "assignment" ? "max-w-[1080px]" : "max-w-[780px]"} mx-auto py-6 px-4 flex flex-col sm:flex-row gap-4 justify-between`}
    >
      <div className="w-full">
        <CourseHeaderDetail
          type={type}
          data={data}
          toggle={() => setIsOpen(!isOpen)}
        />

        <CommentInput />
        <CourseAttachmentDetail files={data?.post_files} />
        <CommentSection isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>
      <CourseSideDetail type={type} />
    </div>
  );
};

export default CourseDetail;

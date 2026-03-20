import React, { useState } from "react";
import CommentCard from "./CommentCard";
import { IoTimeOutline, IoChatbubbleOutline } from "react-icons/io5";
import useCourseComments from "../hooks/useCourseComments";
import { useParams } from "react-router";

const CommentSection = ({ isOpen, toggle }) => {
  const { id_class, id_post } = useParams();
  const { data: comments, isLoading } = useCourseComments(id_class, id_post);
  const { message, handleInput, handleSubmit } = useCourseComments(
    id_class,
    id_post,
  );

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggle}
      />

      <div
        className={`
      fixed inset-x-0 bottom-0 z-[70] bg-white rounded-t-2xl shadow-2xl transition-transform duration-300
      h-[80vh] p-6
      ${isOpen ? "translate-y-0" : "translate-y-full"}
      lg:relative lg:translate-y-0 lg:h-auto lg:px-0 lg:py-6 lg:border-t lg:border-gray-100 lg:shadow-none lg:z-0 lg:rounded-none
    `}
      >
        <div
          className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6 lg:hidden cursor-pointer"
          onClick={toggle}
        />

        <div className="hidden sm:flex items-center gap-2 mb-6">
          <IoChatbubbleOutline className="text-text-muted" size={20} />
          <h2 className="text-text-heading font-bold text-lg">
            Komentar Kelas
          </h2>
        </div>

        <div className="relative h-full">
          <div className="space-y-6 overflow-y-auto lg:overflow-visible max-h-[64vh] lg:max-h-none pb-12">
            {comments?.map((comment, index) => (
              <CommentCard
                key={index}
                name={comment?.user?.name}
                message={comment?.message}
                created_at={comment?.created_at}
              />
            ))}
          </div>

          <div className="block sm:hidden absolute w-full bottom-0 flex items-center gap-3 py-6">
            <img
              className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://pbs.twimg.com/media/GM-K29qaoAAmXky?format=jpg&name=medium"
              alt="profile"
            />
            <input
              type="text"
              placeholder="Tambahkan komentar kelas..."
              className="w-full bg-app-surface border border-app-border rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentSection;

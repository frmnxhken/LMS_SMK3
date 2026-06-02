import React from "react";
import useCourseCommentStore from "../hooks/useCourseCommentStore";
import { useParams } from "react-router";
import Button from "@/shared/ui/buttons/Button";
import { MdSend } from "react-icons/md";
import { BASE_IMAGE_PROFILE } from "@/shared/lib/Constants";
import { useAuth } from "@/app/contexts/AuthContext";

const CommentInput = () => {
  const { user } = useAuth();
  const { id_class, id_post } = useParams();
  const { message, handleInput, handleSubmit } = useCourseCommentStore(
    id_class,
    id_post,
  );

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="w-full flex items-center gap-3">
        <img
          className="w-[40px] h-[40px] rounded-full object-cover"
          src={BASE_IMAGE_PROFILE + user.photo}
          alt="profile"
        />
        <input
          onInput={handleInput}
          type="text"
          placeholder="Tambahkan komentar kelas..."
          className="flex-1 border border-app-border rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
        />
        <Button className="h-8">
          <MdSend />
        </Button>
      </div>
    </form>
  );
};

export default CommentInput;

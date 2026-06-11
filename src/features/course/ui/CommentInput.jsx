import React from "react";
import useCourseCommentStore from "../hooks/useCourseCommentStore";
import { useParams } from "react-router";
import Button from "@/shared/ui/buttons/Button";
import { MdSend } from "react-icons/md";
import { useAuth } from "@/app/contexts/AuthContext";
import { env } from "@/shared/lib/Config";

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
          className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px] rounded-full object-cover"
          src={env.IMAGE_URL + user.photo}
          alt="profile"
        />
        <input
          onInput={handleInput}
          type="text"
          placeholder="Tambahkan komentar kelas..."
          className="w-full border border-app-border rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
        />
        <Button className="h-8">
          <MdSend />
        </Button>
      </div>
    </form>
  );
};

export default CommentInput;

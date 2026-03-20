import React from "react";
import useCourseCommentStore from "../hooks/useCourseCommentStore";
import { useParams } from "react-router";
import Button from "@/shared/ui/buttons/Button";

const CommentInput = () => {
  const { id_class, id_post } = useParams();
  const { message, handleInput, handleSubmit } = useCourseCommentStore(
    id_class,
    id_post,
  );

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="flex items-center gap-3 py-6">
        <img
          className="w-[40px] h-[40px] rounded-full object-cover"
          src="https://pbs.twimg.com/media/GM-K29qaoAAmXky?format=jpg&name=medium"
          alt="profile"
        />
        <input
          onInput={handleInput}
          type="text"
          placeholder="Tambahkan komentar kelas..."
          className="flex-1 border border-app-border rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
        />
        <Button>Kirim</Button>
      </div>
    </form>
  );
};

export default CommentInput;

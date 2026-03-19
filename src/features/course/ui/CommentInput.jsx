import React from "react";

const CommentInput = () => {
  return (
    <div className="hidden sm:flex items-center gap-3 py-6">
      <img
        className="w-[40px] h-[40px] rounded-full object-cover"
        src="https://pbs.twimg.com/media/GM-K29qaoAAmXky?format=jpg&name=medium"
        alt="profile"
      />
      <input
        type="text"
        placeholder="Tambahkan komentar kelas..."
        className="flex-1 border border-app-border rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
      />
    </div>
  );
};

export default CommentInput;

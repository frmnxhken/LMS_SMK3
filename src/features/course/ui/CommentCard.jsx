import React from "react";
import { formatDateDMY } from "@/shared/lib/formatDate";
import { env } from "@/shared/lib/Config";

const CommentCard = ({ name, message, created_at, photo }) => {
  return (
    <div className="flex gap-4">
      <img
        className="w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-full object-cover"
        src={env.IMAGE_URL + photo}
        alt="profile"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-bold text-text-heading">{name}</h4>
          <span className="text-[11px] text-text-muted">
            {formatDateDMY(created_at)}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-text-body mt-1 font-medium">
          {message}
        </p>
      </div>
    </div>
  );
};

export default CommentCard;

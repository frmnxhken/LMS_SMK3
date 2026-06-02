import React from "react";
import { BASE_IMAGE_PROFILE } from "@/shared/lib/Constants";
import { formatDateDMY } from "@/shared/lib/formatDate";

const CommentCard = ({ name, message, created_at, photo }) => {
  return (
    <div className="flex gap-4">
      <img
        className="w-[40px] h-[40px] rounded-full object-cover"
        src={BASE_IMAGE_PROFILE + photo}
        alt="profile"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-bold text-text-heading">{name}</h4>
          <span className="text-[11px] text-text-muted">
            {formatDateDMY(created_at)}
          </span>
        </div>
        <p className="text-sm text-text-body mt-1 font-medium">{message}</p>
      </div>
    </div>
  );
};

export default CommentCard;

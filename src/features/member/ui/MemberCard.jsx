import React from "react";
import { BASE_IMAGE_PROFILE } from "@/shared/lib/Constants";

const MemberCard = ({ name, photo, nip = null }) => {
  return (
    <div className="border border-app-border rounded-xl p-4">
      <div className="flex items-center gap-4">
        <img
          className="w-[50px] h-[50px] rounded-full object-cover"
          src={BASE_IMAGE_PROFILE + photo}
          alt="profile"
        />
        <div>
          <p className="text-md font-medium text-app-body">{name}</p>
          <p className="text-sm text-text-muted">{nip}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;

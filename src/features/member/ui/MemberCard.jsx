import React from "react";
import { BASE_IMAGE_PROFILE } from "@/shared/lib/Constants";

const MemberCard = ({ name, photo }) => {
  return (
    <div className="border border-app-border rounded-xl p-4">
      <div className="flex items-center gap-4">
        <img
          className="w-[50px] h-[50px] rounded-full object-cover"
          src={BASE_IMAGE_PROFILE + photo}
          alt="profile"
        />
        <p className="text-md font-medium text-app-body">{name}</p>
      </div>
    </div>
  );
};

export default MemberCard;

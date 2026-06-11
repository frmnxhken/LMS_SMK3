import { env } from "@/shared/lib/Config";
import React from "react";

const MemberCard = ({ name, photo, nip = null }) => {
  return (
    <div className="border border-app-border rounded-xl p-4">
      <div className="flex items-center gap-4">
        <img
          className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full object-cover"
          src={env.IMAGE_URL + photo}
          alt="profile"
        />
        <div>
          <p className="text-sm sm:text-md font-medium text-app-body">{name}</p>
          <p className="text-xs sm:text-sm text-text-muted font-semibold">
            {nip}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;

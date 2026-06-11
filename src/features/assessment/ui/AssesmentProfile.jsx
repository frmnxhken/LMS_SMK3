import React from "react";
import { formatDateDMY } from "@/shared/lib/formatDate";
import { IoTimeOutline } from "react-icons/io5";
import { env } from "@/shared/lib/Config";

const AssesmentProfile = ({ photo, name, date }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4">
        <img
          className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] object-cover rounded-full"
          src={env.IMAGE_URL + photo}
          alt="profile"
        />
        <div>
          <h3 className="text-sm sm:text-md font-semibold">{name}</h3>
          <div className="flex items-center gap-2 text-text-muted">
            <IoTimeOutline size={18} />
            <span className="text-xs">{formatDateDMY(date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssesmentProfile;

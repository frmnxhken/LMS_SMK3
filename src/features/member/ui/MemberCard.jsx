import React from "react";

const imageProfile =
  "https://pbs.twimg.com/media/GM-K29qaoAAmXky?format=jpg&name=medium";

const MemberCard = ({ name }) => {
  return (
    <div className="border border-app-border rounded-xl p-4">
      <div className="flex items-center gap-4">
        <img
          className="w-[50px] h-[50px] rounded-full object-cover"
          src={imageProfile}
          alt="profile"
        />
        <p className="text-md font-medium text-app-body">{name}</p>
      </div>
    </div>
  );
};

export default MemberCard;

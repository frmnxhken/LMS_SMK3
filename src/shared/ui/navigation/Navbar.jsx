import React from "react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router";

const imageProfile =
  "https://pbs.twimg.com/media/GM-K29qaoAAmXky?format=jpg&name=medium";
const Navbar = ({ onMenuClick }) => {
  return (
    <div className="sticky top-0 bg-app-surface z-50 flex h-18 px-6 sm:justify-end justify-between border-b border-app-border">
      <button onClick={onMenuClick} className="lg:hidden p-2 cursor-pointer">
        <MdMenu size={24} />
      </button>
      <div className="flex items-center gap-2">
        <p className="text-md text-app-body font-medium">Aralie Abigail</p>
        <img
          src={imageProfile}
          className="w-[40px] h-[40px] object-cover rounded-full"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { useAuth } from "@/app/contexts/AuthContext";
import { BASE_IMAGE_PROFILE } from "@/shared/lib/Constants";
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router";

const Navbar = ({ onMenuClick }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 bg-app-surface z-50 flex h-18 px-6 sm:justify-end justify-between border-b border-app-border">
      <button onClick={onMenuClick} className="lg:hidden p-2 cursor-pointer">
        <MdMenu size={24} />
      </button>
      <div className="flex items-center gap-2">
        <p className="text-md text-app-body font-medium">{user.name}</p>
        <img
          onClick={() => navigate("profile")}
          src={BASE_IMAGE_PROFILE + user.photo}
          className="w-[40px] h-[40px] object-cover rounded-full cursor-pointer"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Navbar;

import Button from "@/shared/ui/buttons/Button";
import React from "react";
import { HiCamera } from "react-icons/hi";

const PhotoProfile = ({ fullname, role, photo }) => {
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between border border-app-border">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
            <img
              src={photo}
              alt="Profile"
              className="w-full h-full object-cover bg-primary"
            />
          </div>
          <button className="absolute bottom-1 right-1 bg-primary p-2.5 rounded-full text-white transition-all transform hover:scale-110">
            <HiCamera size={18} />
          </button>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold text-text-heading">{fullname}</h1>
          <p className="text-text-muted font-medium">{role}</p>
        </div>
      </div>

      <Button variant="outline">Change Picture</Button>
    </div>
  );
};

export default PhotoProfile;

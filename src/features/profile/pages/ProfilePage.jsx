import React from "react";
import PhotoProfile from "../ui/PhotoProfile";
import BioData from "../ui/BioData";
import { useAuth } from "@/app/contexts/AuthContext";

export const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <div className="max-w-[800px] mx-auto space-y-6">
        <PhotoProfile
          fullname={user.name}
          role={user.role}
          photo={user.photo}
        />
        <BioData data={user} />
      </div>
    </div>
  );
};

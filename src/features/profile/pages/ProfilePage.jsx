import React from "react";
import PhotoProfile from "../ui/PhotoProfile";
import BioData from "../ui/BioData";
import { useAuth } from "@/app/contexts/AuthContext";

export const ProfilePage = () => {
  const { user } = useAuth();
  const photo =
    "https://image.idntimes.com/post/20241121/whatsapp-image-2024-11-21-at-105203-pm-2-770cbc2889bb4c14bf5042be7b505d5d-d2904a0a0ad1870b3ee5ec09462c24a0.jpeg";

  return (
    <div className="p-6">
      <div className="max-w-[800px] mx-auto space-y-6">
        <PhotoProfile fullname={user.name} role={user.role} photo={photo} />
        <BioData data={user} />
      </div>
    </div>
  );
};

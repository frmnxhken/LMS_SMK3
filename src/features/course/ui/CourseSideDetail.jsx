import React from "react";
import AttachmentCard from "./AttachmentCard";
import { useAuth } from "@/app/contexts/AuthContext";
import Button from "@/shared/ui/buttons/Button";

const CourseSideDetail = ({ type }) => {
  const { user } = useAuth();
  return (
    <>
      {type === "assignment" && (
        <div className="sticky sm:relative bottom-0 w-full sm:w-[40%] pt-4 sm:pt-0">
          {user.role === "student" ? (
            <AttachmentCard />
          ) : (
            <Button className="w-full">Lihat Pengumpulan</Button>
          )}
        </div>
      )}
    </>
  );
};

export default CourseSideDetail;

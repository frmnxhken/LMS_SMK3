import React from "react";
import AttachmentCard from "./AttachmentCard";
import { useAuth } from "@/app/contexts/AuthContext";
import Button from "@/shared/ui/buttons/Button";
import { useNavigate } from "react-router";
import { isExpired } from "@/shared/lib/formatDate";

const CourseSideDetail = ({ type, submission, id_class, id_post, due }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {type === "assignment" && (
        <div className="sticky sm:relative bottom-0 w-full sm:w-[40%] pt-4 sm:pt-0 overflow-hidden">
          {user.role === "student" ? (
            <AttachmentCard
              status={submission?.status}
              score={submission?.score}
              isExpired={isExpired(due)}
            />
          ) : (
            <Button
              onClick={() =>
                navigate(`/course/${id_class}/assignment/${id_post}/assessment`)
              }
              size="md"
              className="w-full"
            >
              Lihat Pengumpulan
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default CourseSideDetail;

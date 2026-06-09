import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/app/contexts/AuthContext";
import { courseVariantColors } from "@/shared/lib/Constants";
import Badge from "@/shared/ui/Feedback/Badge";
import { IoArrowForward, IoPerson, IoLibrary } from "react-icons/io5";
import Button from "@/shared/ui/buttons/Button";

const CourseCard = ({ id, subject, teacher, index, class_name }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const color = courseVariantColors[index % 5];

  return (
    <div className="bg-app-surface border border-app-border rounded-xl overflow-hidden transition-all duration-300">
      <div className="h-32 flex items-center p-4 relative overflow-hidden bg-slate-100/50">
        <div className="w-full">
          {class_name && <Badge label={class_name} />}
          <h3 className="text-lg font-semibold w-3/4 text-text-heading leading-tight mt-2 group-hover:text-primary transition-colors">
            {subject}
          </h3>
        </div>
        <IoLibrary
          className={`${color} text-7xl absolute -bottom-4 -right-4 rotate-12`}
        />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-text-body text-xs">
          <IoPerson />
          <span>{user.role === "student" ? teacher : "Anda"}</span>
        </div>

        <Button
          onClick={() => navigate(`/course/${id}`)}
          variant="outline"
          className="w-full mt-6 hover:!bg-primary hover:text-white"
          size="md"
        >
          {user.role === "student" ? "Mulai Belajar" : "Mulai Mengajar"}
          <IoArrowForward />
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;

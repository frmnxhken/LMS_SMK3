import React from "react";
import { IoEllipsisVertical, IoTimeOutline } from "react-icons/io5";
import Dropdown from "@/shared/ui/buttons/DropDown";
import { Link, useParams } from "react-router";
import { useAuth } from "@/app/contexts/AuthContext";
import IconConfig from "../hooks/useCourseConfig";
import { useCoursePostAction } from "../hooks/useCourseAction";
import { formatDateDMY } from "@/shared/lib/formatDate";
import Badge from "@/shared/ui/Feedback/Badge";

const CoursePostCard = ({ id, type, title, created_at }) => {
  const { user } = useAuth();
  const { id_class } = useParams();
  const actionMenus = useCoursePostAction(id, id_class, type);
  const config = IconConfig(type);

  return (
    <div className="bg-app-surface border border-app-border rounded-xl p-4 cursor-pointer hover:bg-app-bg">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`p-3 rounded-full ${config.bg} ${config.text} transition-colors group-hover:bg-opacity-80`}
          >
            <config.icon size={18} />
          </div>

          <div className="flex flex-col">
            <div>
              <Badge
                label={type === "assignment" ? "Tugas" : "Materi"}
                variant={type === "assignment" ? "warning" : "info"}
              />
            </div>

            <Link
              to={"post/" + id}
              className="text-sm sm:text-base font-semibold text-text-heading mt-1 group-hover:text-primary transition-colors capitalize"
            >
              {title}
            </Link>

            <div className="flex items-center gap-1 text-[11px] text-text-muted mt-1">
              <IoTimeOutline />
              <span>{formatDateDMY(created_at)}</span>
            </div>
          </div>
        </div>
        {user.role === "teacher" && (
          <Dropdown
            trigger={<IoEllipsisVertical size={18} />}
            menuItems={actionMenus}
            align="right"
          />
        )}
      </div>
    </div>
  );
};

export default CoursePostCard;

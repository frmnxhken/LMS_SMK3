import React from "react";
import {
  IoClipboard,
  IoEllipsisVertical,
  IoPencil,
  IoTimeOutline,
  IoTrash,
} from "react-icons/io5";
import Badge from "@/shared/ui/Feedback/Badge";
import Dropdown from "@/shared/ui/buttons/DropDown";
import { useAuth } from "@/app/contexts/AuthContext";
import { formatTimeStamp, isExpired } from "@/shared/lib/formatDate";
import { Link } from "react-router";

const ExamAssignmentCard = ({ exam, onEdit, onDelete }) => {
  const { user } = useAuth();

  const actionMenus = [
    {
      label: "Edit",
      icon: IoPencil,
      onClick: () => onEdit(exam),
    },
    {
      label: "Delete",
      icon: IoTrash,
      onClick: () => onDelete(exam.id),
    },
  ];

  return (
    <div className="bg-app-surface border border-app-border rounded-xl p-4 cursor-pointer hover:bg-app-bg">
      <div className="flex items-start gap-4 justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full text-green-600 bg-green-50 transition-colors group-hover:bg-opacity-80">
            <IoClipboard size={24} />
          </div>

          <div className="flex flex-col">
            <div>
              <Badge label={exam.exam.type} variant="success" />
            </div>
            {user.role === "student" ? (
              <Link
                to={`${exam.id}/prepare`}
                className="text-sm sm:text-base font-semibold text-text-heading mt-1 group-hover:text-primary transition-colors"
              >
                {exam.exam.title}
              </Link>
            ) : (
              <h2 className="text-sm sm:text-base font-semibold text-text-heading mt-1 group-hover:text-primary transition-colors">
                {exam.exam.title}
              </h2>
            )}
            <div className="flex items-center gap-x-4 text-[11px] text-text-muted mt-1">
              <div className="flex items-center">
                <IoTimeOutline />
                <span>{formatTimeStamp(exam.start_time)}</span>
              </div>
              -
              <div className="flex items-center">
                <IoTimeOutline />
                <span>{formatTimeStamp(exam.end_time)}</span>
              </div>
            </div>
          </div>
        </div>
        {user.role === "teacher" && (
          <div>
            <Dropdown
              trigger={<IoEllipsisVertical size={18} />}
              align="right"
              menuItems={actionMenus}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamAssignmentCard;

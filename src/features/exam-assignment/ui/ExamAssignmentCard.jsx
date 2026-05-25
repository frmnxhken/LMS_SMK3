import React from "react";
import {
  IoClipboard,
  IoEllipsisVertical,
  IoPencil,
  IoTimeOutline,
  IoTrash,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { formatDateDMY } from "@/shared/lib/formatDate";
import Badge from "@/shared/ui/Feedback/Badge";
import Dropdown from "@/shared/ui/buttons/DropDown";

const ExamAssignmentCard = ({ id, title, due, created_at }) => {
  const navigate = useNavigate();
  const actionMenus = [
    {
      label: "Edit",
      icon: IoPencil,
      onClick: () => navigate(`${type}/${id}/edit`),
    },
    {
      label: "Delete",
      icon: IoTrash,
    },
  ];

  return (
    <div className="bg-app-surface border border-app-border rounded-xl p-4 cursor-pointer hover:bg-app-bg">
      <div className="flex flex-col sm:flex-row items-start gap-4 justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full text-green-600 bg-green-50 transition-colors group-hover:bg-opacity-80">
            <IoClipboard size={24} />
          </div>

          <div className="flex flex-col">
            <div>
              <Badge label="Ujian Harian" variant="success" />
            </div>
            <h2 className="text-sm sm:text-base font-semibold text-text-heading mt-1 group-hover:text-primary transition-colors">
              Ujian Harian Anomali
            </h2>

            <div className="flex items-center gap-x-4 text-[11px] text-text-muted mt-1">
              <div className="flex items-center">
                <IoTimeOutline />
                <span>{formatDateDMY(created_at)}</span>
              </div>
              -
              <div className="flex items-center">
                <IoTimeOutline />
                <span>{formatDateDMY(due)}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Dropdown
            trigger={<IoEllipsisVertical size={18} />}
            align="right"
            menuItems={actionMenus}
          />
        </div>
      </div>
    </div>
  );
};

export default ExamAssignmentCard;

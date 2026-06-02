import React from "react";
import { IoClipboard, IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router";
import { formatDateDMY } from "@/shared/lib/formatDate";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-app-surface border border-app-border rounded-xl p-4 cursor-pointer hover:bg-app-bg">
      <div className="flex flex-col sm:flex-row items-start gap-4 justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full text-orange-600 bg-orange-50 transition-colors group-hover:bg-opacity-80">
            <IoClipboard size={24} />
          </div>

          <div className="flex flex-col">
            <Link
              to={`/course/${task.class_id}/post/${task.id}`}
              className="text-sm sm:text-base font-semibold text-text-heading mt-1 group-hover:text-primary transition-colors"
            >
              {task.title}
            </Link>
            <p className="text-xs text-text-muted">{task.subject}</p>

            <div className="flex items-center gap-x-4 text-[11px] text-text-muted mt-1">
              <div className="flex items-center">
                <IoTimeOutline />
                <span>{formatDateDMY(task.created_at)}</span>
              </div>
              -
              <div className="flex items-center">
                <IoTimeOutline />
                <span>{formatDateDMY(task.due)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

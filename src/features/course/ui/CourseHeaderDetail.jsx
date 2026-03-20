import React from "react";
import IconConfig from "../hooks/useCourseConfig";
import { IoTimeOutline, IoChatbubbleOutline } from "react-icons/io5";
import { formatDateDMY } from "@/shared/lib/formatDate";
import Badge from "@/shared/ui/buttons/Badge";

const CourseHeaderDetail = ({
  type,
  title,
  content,
  created_at,
  due,
  toggle,
}) => {
  const config = IconConfig(type);
  return (
    <div className="flex items-start gap-4">
      <div
        className={`p-3 rounded-full ${config.bg} ${config.text} transition-colors group-hover:bg-opacity-80`}
      >
        <config.icon size={24} />
      </div>

      <div className="w-full">
        <div>
          <span
            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${config.bg} ${config.text}`}
          >
            {config.label}
          </span>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-text-heading mt-1">
            {title}
          </h1>
          <p>{content}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
          <div className="flex items-center gap-4 text-sm text-text-muted mt-1">
            <IoTimeOutline />
            <span>{formatDateDMY(created_at)}</span>
            <button
              onClick={toggle}
              className="flex sm:hidden items-center gap-1 text-sm text-primary font-semibold hover:text-blue-700 transition-colors cursor-pointer"
            >
              <IoChatbubbleOutline />
              Lihat komentar
            </button>
          </div>
          {type === "assignment" && (
            <Badge variant="warning" label={"BERAKHIR:" + formatDateDMY(due)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseHeaderDetail;

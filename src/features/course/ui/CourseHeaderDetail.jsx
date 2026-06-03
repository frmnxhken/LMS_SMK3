import React from "react";
import IconConfig from "../hooks/useCourseConfig";
import { IoTimeOutline, IoChatbubbleOutline } from "react-icons/io5";
import { formatDateDMY } from "@/shared/lib/formatDate";
import Badge from "@/shared/ui/Feedback/Badge";

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
        <config.icon size={18} />
      </div>

      <div className="w-full">
        <div>
          <Badge
            label={type === "assignment" ? "Tugas" : "Materi"}
            variant={type === "assignment" ? "warning" : "info"}
          />
        </div>

        <div>
          <h1 className="text-md sm:text-xl font-semibold text-text-heading mt-1 capitalize">
            {title}
          </h1>
          <p className="text-sm mb-2">{content}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
          <div className="flex items-center gap-4 text-xs sm:text-sm text-text-muted mt-1 ">
            <div className="flex items-center gap-1">
              <IoTimeOutline />
              <span>{formatDateDMY(created_at)}</span>
            </div>
            <button
              onClick={toggle}
              className="flex sm:hidden items-center gap-1 text-xs sm:text-sm text-primary font-semibold hover:text-blue-700 transition-colors cursor-pointer"
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

import React from "react";
import Badge from "@/shared/ui/Feedback/Badge";
import { Link, useNavigate } from "react-router";
import { IoEllipsisVertical, IoPencil, IoTrash } from "react-icons/io5";
import Dropdown from "@/shared/ui/buttons/DropDown";
import useQuestionDelete from "../hooks/useQuestionDelete";

const QuestionListCard = ({ question }) => {
  const { handleDelete } = useQuestionDelete(question.id);
  const colorVariantType = {
    harian: "success",
    uts: "warning",
    uas: "danger",
  };

  const navigate = useNavigate();
  const actionMenus = [
    {
      label: "Edit",
      icon: IoPencil,
      onClick: () => navigate(`${question.id}/edit`),
    },
    {
      label: "Delete",
      icon: IoTrash,
      onClick: () => handleDelete(),
    },
  ];

  return (
    <div className="bg-app-surface border border-app-border rounded-xl p-6 cursor-pointer hover:bg-app-bg">
      <div className="flex items-start gap-4 justify-between">
        <div>
          <Badge
            variant={colorVariantType[question.type]}
            label={question.type}
          />
          <div className="mt-2">
            <Link
              to={`${question.id}/create`}
              className="text-sm sm:text-md text-text-heading font-semibold mt-2 hover:underline"
            >
              {question.title}
            </Link>
            <p className="text-xs sm:text-sm">{question.subject.name}</p>
          </div>
        </div>
        <div>
          <Dropdown
            trigger={<IoEllipsisVertical size={18} />}
            menuItems={actionMenus}
            align="right"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionListCard;

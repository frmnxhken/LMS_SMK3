import React from "react";
import Badge from "@/shared/ui/Feedback/Badge";
import { Link, useNavigate } from "react-router";
import { IoEllipsisVertical, IoPencil, IoTrash } from "react-icons/io5";
import Dropdown from "@/shared/ui/buttons/DropDown";
import useQuestionDelete from "../hooks/useQuestionDelete";

const QuestionListCard = ({ question }) => {
  const { handleDelete } = useQuestionDelete(question.id);
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
          <div className="flex gap-2">
            <Badge label={question.type} />
            <Badge variant="success" label={question.subject.name} />
          </div>
          <h3 className="text-md text-text-heading font-semibold mt-2">
            {question.title}
          </h3>
          <Link
            className="text-xs font-medium text-primary underline"
            to={`${question.id}/create`}
          >
            Lihat Soal
          </Link>
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

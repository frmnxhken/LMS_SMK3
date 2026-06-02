import React from "react";
import { useNavigate } from "react-router";

const TaskToDo = ({ task }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/course/${task.class_id}/post/${task.id}`)}
      className="cursor-pointer p-2 rounded-lg bg-primary text-white"
    >
      <p className="font-medium truncate">{task.title}</p>
      <p className="text-xs truncate">{task.subject}</p>
      <p className="text-[10px]">{task.due}</p>
    </div>
  );
};

export default TaskToDo;

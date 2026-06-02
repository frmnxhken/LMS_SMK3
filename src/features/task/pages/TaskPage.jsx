import React from "react";
import TopLoader from "@/shared/ui/Feedback/TopLoader";
import TaskCard from "../ui/TaskCard";
import TaskCardSkeleton from "../ui/skeletons/TaskCardSkeleton";
import useTask from "../hooks/useTask";

const TaskPage = () => {
  const { isLoading, data } = useTask();

  return (
    <div className="container max-w-[800px] mx-auto p-6">
      <TopLoader isLoading={isLoading} />
      <h1 className="text-heading font-bold text-xl">Daftar Tugas</h1>
      <div className="space-y-2 mt-6">
        {isLoading && <TaskCardSkeleton />}
        {data?.data.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskPage;

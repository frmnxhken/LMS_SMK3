import React from "react";
import { useParams } from "react-router";
import AssignmentCard from "../ui/AssignmentCard";
import AssignmentCardSkeleton from "../ui/skeletons/AssignmentCardSkeleton";
import useAssignmentList from "../hooks/useAssignmentList";

export const AssignmentListPage = () => {
  const { id_class } = useParams();
  const { data, isLoading } = useAssignmentList(id_class);

  return (
    <div className="max-w-[800px] container mx-auto p-6">
      <h1 className="text-heading font-bold text-md sm:text-xl mb-4">
        Daftar Tugas
      </h1>
      <div className="space-y-2">
        {isLoading && <AssignmentCardSkeleton />}
        {data?.[0].posts?.map((assignment, index) => (
          <AssignmentCard
            key={index}
            assignment={assignment}
            idClass={id_class}
          />
        ))}
      </div>
    </div>
  );
};

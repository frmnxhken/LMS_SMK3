import React from "react";
import AssignmentCard from "../ui/AssignmentCard";
import { useParams } from "react-router";
import useAssignmentList from "../hooks/useAssignmentList";

const AssignmentListPage = () => {
  const { id_class } = useParams();
  const { data, isLoading } = useAssignmentList(id_class);

  return (
    <div className="max-w-[800px] container mx-auto p-4">
      <div className="space-y-2">
        {data?.[0].posts?.map((assignment, index) => (
          <AssignmentCard key={index} {...assignment} />
        ))}
      </div>
    </div>
  );
};

export default AssignmentListPage;

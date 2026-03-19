import React from "react";
import { useParams } from "react-router";
import useAssignmentCreate from "../hooks/useAssignmentCreate";
import AssignmentForm from "../ui/AssignmentForm";

const AssignmentCreatePage = () => {
  const { id_class } = useParams();
  const { handleSubmit, isLoading, errors } = useAssignmentCreate(id_class);
  return (
    <div className="container max-w-[780px] p-6 mx-auto">
      <div className="border border-app-border p-4 rounded-xl">
        <AssignmentForm
          errors={errors}
          onSubmit={(data) => handleSubmit(data)}
        />
      </div>
    </div>
  );
};

export default AssignmentCreatePage;

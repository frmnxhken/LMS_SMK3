import React from "react";
import useClass from "../hooks/useClass";
import ClassTable from "../ui/ClassTable";
import ClassHeader from "../ui/ClassHeader";

export const ClassPage = () => {
  const { isLoading, data } = useClass();

  return (
    <div className="container mx-auto p-6">
      <ClassHeader />
      <div className="table-responsive mt-4">
        <ClassTable data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

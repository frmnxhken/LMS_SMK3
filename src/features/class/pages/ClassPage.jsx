import React from "react";
import useClass from "../hooks/useClass";
import ClassTable from "../ui/ClassTable";
import ClassHeader from "../ui/ClassHeader";
import { useAcademicYear } from "@/app/contexts/AcademicYearContext";

export const ClassPage = () => {
  const { isLoading, data } = useClass();
  const { status } = useAcademicYear();

  return (
    <div className="container mx-auto p-6">
      <ClassHeader status={status} />
      <div className="table-responsive mt-4">
        <ClassTable data={data} isLoading={isLoading} status={status} />
      </div>
    </div>
  );
};

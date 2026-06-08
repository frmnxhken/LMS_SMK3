import React from "react";
import TeacherReportTable from "../ui/TeacherReportTable";
import TeacherReportHeader from "../ui/TeacherReportHeader";
import useTeacherReport from "../hooks/useTeacherReport";
import { useParams } from "react-router";

const TeacherReportPage = () => {
  const { id_class } = useParams();
  const { data, isLoading } = useTeacherReport(id_class);

  return (
    <div className="container max-w-[1200px] mx-auto p-6">
      <TeacherReportHeader meta={data?.meta} idClass={id_class} />
      <div className="table-responsive border-app-border">
        <TeacherReportTable reports={data?.data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default TeacherReportPage;

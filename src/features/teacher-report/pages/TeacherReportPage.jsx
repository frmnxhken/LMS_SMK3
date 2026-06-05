import React from "react";
import reports from "@/shared/data/dummy/report.json";
import TeacherReportTable from "../ui/TeacherReportTable";
import TeacherReportHeader from "../ui/TeacherReportHeader";
import useTeacherReport from "../hooks/useTeacherReport";
import { useParams } from "react-router";

const TeacherReportPage = () => {
  const { id_class } = useParams();
  const { data, isLoading } = useTeacherReport(id_class);

  if (isLoading) return;

  return (
    <div className="container max-w-[1200px] mx-auto p-6">
      <TeacherReportHeader meta={data?.meta} />
      <div className="table-responsive border-app-border">
        <TeacherReportTable reports={data?.data} />
      </div>
    </div>
  );
};

export default TeacherReportPage;

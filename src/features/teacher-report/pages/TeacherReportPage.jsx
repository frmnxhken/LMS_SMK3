import React from "react";
import reports from "@/shared/data/dummy/report.json";
import TeacherReportTable from "../ui/TeacherReportTable";
import TeacherReportHeader from "../ui/TeacherReportHeader";

const TeacherReportPage = () => {
  return (
    <div className="container max-w-[1200px] mx-auto p-6">
      <TeacherReportHeader />
      <div className="table-responsive border-app-border">
        <TeacherReportTable reports={reports} />
      </div>
    </div>
  );
};

export default TeacherReportPage;

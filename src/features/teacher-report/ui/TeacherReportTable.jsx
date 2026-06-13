import React from "react";
import TeacherReportTableSkeleton from "./skeletons/TeacherReportTableSkeleton";
import { Link } from "react-router";

const TeacherReportTable = ({ reports, isLoading }) => {
  const rankColors = ["bg-yellow-200", "bg-slate-200", "bg-orange-200"];

  return (
    <table className="table-custom">
      <thead className="">
        <tr>
          <th className="table-head-cell">No</th>
          <th className="table-head-cell">Nama</th>
          <th className="table-head-cell">Nis</th>
          <th className="table-head-cell">Tugas</th>
          <th className="table-head-cell">UH</th>
          <th className="table-head-cell">UTS</th>
          <th className="table-head-cell">UAS</th>
          <th className="table-head-cell">Nilai Akhir</th>
        </tr>
      </thead>
      {isLoading && <TeacherReportTableSkeleton />}
      <tbody className="text-xs">
        {!isLoading &&
          reports?.map((report, index) => (
            <tr
              key={report.id}
              className={`table-body-row ${rankColors[index]}`}
            >
              <td className="table-body-cell border-r border-app-border">
                {index + 1}
              </td>
              <td className="table-body-cell border-r border-app-border">
                <Link to={`${report.id}/student`} className="underline">
                  {report.name}
                </Link>
              </td>
              <td className="table-body-cell border-r border-app-border">
                {report.nis}
              </td>
              <td className="table-body-cell">{report.assignment}</td>
              <td className="table-body-cell">{report.daily}</td>
              <td className="table-body-cell">{report.uts}</td>
              <td className="table-body-cell">{report.uas}</td>
              <td className="table-body-cell">{report.final_score}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TeacherReportTable;

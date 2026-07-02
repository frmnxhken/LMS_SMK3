import React from "react";
import EmptyState from "@/shared/ui/Feedback/EmptyState";
import GradeDailyExamTableSkeleton from "./skeletons/GradeDailyExamTableSkeleton";
import { formatDateDMY } from "@/shared/lib/formatDate";

const GradeDailyExamTable = ({ data = [], isLoading }) => {
  return (
    <table className="table-custom">
      <thead className="">
        <tr>
          <th className="table-head-cell">No</th>
          <th className="table-head-cell">Ujian Harian</th>
          <th className="table-head-cell">Tanggal</th>
          <th className="table-head-cell">Nilai</th>
        </tr>
      </thead>
      <tbody className="text-xs">
        {isLoading ? (
          <GradeDailyExamTableSkeleton />
        ) : data?.length === 0 ? (
          <tr className="table-body-row">
            <td className="table-body-cell" colSpan={6}>
              <EmptyState />
            </td>
          </tr>
        ) : (
          data?.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="table-body-cell">{index + 1}</td>
              <td className="table-body-cell">{item.title}</td>
              <td className="table-body-cell">{formatDateDMY(item.date)}</td>
              <td className="table-body-cell">{item.score}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default GradeDailyExamTable;

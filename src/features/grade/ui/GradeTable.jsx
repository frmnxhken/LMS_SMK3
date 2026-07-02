import React from "react";
import GradeTableSkeleton from "./skeletons/GradeTableSkeleton";
import EmptyState from "@/shared/ui/Feedback/EmptyState";
import { Link } from "react-router";

const GradeTable = ({ data = [], isLoading }) => {
  return (
    <table className="table-custom">
      <thead className="">
        <tr>
          <th className="table-head-cell">No</th>
          <th className="table-head-cell">Mata Pelajaran</th>
          <th className="table-head-cell">Tugas</th>
          <th className="table-head-cell">UH</th>
          <th className="table-head-cell">UTS</th>
          <th className="table-head-cell">UAS</th>
          <th className="table-head-cell">Nilai Akhir</th>
        </tr>
      </thead>
      <tbody className="text-xs">
        {isLoading ? (
          <GradeTableSkeleton />
        ) : data?.length === 0 ? (
          <tr className="table-body-row">
            <td className="table-body-cell" colSpan={6}>
              <EmptyState />
            </td>
          </tr>
        ) : (
          data?.map((item, index) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="table-body-cell">{index + 1}</td>
              <td className="table-body-cell max-w-[100px] break-words">
                <Link to={`${item.class_subject.id}`} className="underline">
                  {item.class_subject.subject.name}
                </Link>
              </td>
              <td className="table-body-cell">{item.assignment}</td>
              <td className="table-body-cell">{item.daily}</td>
              <td className="table-body-cell">{item.uts} </td>
              <td className="table-body-cell">{item.uas}</td>
              <td className="table-body-cell">{item.final_score}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default GradeTable;

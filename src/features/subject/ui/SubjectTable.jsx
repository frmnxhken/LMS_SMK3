import React from "react";
import Button from "@/shared/ui/buttons/Button";
import EmptyState from "@/shared/ui/Feedback/EmptyState";
import SubjectTableSkeleton from "./skeletons/SubjectTableSkeleton";
import { MdDelete, MdEdit } from "react-icons/md";

const SubjectTable = ({ data = [], isLoading, onEdit, onDelete, status }) => {
  return (
    <table className="table-custom">
      <thead className="">
        <tr>
          <th className="table-head-cell">No</th>
          <th className="table-head-cell">Nama Mapel</th>
          <th className="table-head-cell">Aksi</th>
        </tr>
      </thead>
      <tbody className="text-xs">
        {isLoading ? (
          <SubjectTableSkeleton />
        ) : data?.length === 0 ? (
          <tr>
            <td colSpan={3} className="text-center">
              <EmptyState />
            </td>
          </tr>
        ) : (
          data?.map((item, index) => (
            <tr className="table-body-row">
              <td className="table-body-cell">{index + 1}</td>
              <td className="table-body-cell">{item.name}</td>
              <td className="table-body-cell flex space-x-2">
                <Button
                  disabled={status !== "draft"}
                  variant="table"
                  onClick={() => onEdit(item)}
                >
                  <MdEdit size={18} />
                </Button>
                <Button
                  disabled={status !== "draft"}
                  variant="table"
                  onClick={() => onDelete(item.id)}
                >
                  <MdDelete size={18} />
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default SubjectTable;

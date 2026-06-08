import React from "react";
import { useNavigate } from "react-router";
import Button from "@/shared/ui/buttons/Button";
import EmptyState from "@/shared/ui/Feedback/EmptyState";
import ClassTableSkeleton from "./skeletons/ClassTableSkeleton";
import useClassDelete from "../hooks/useClassDelete";
import { MdDelete, MdEdit } from "react-icons/md";

const ClassTable = ({ data = [], isLoading }) => {
  const navigate = useNavigate();
  const { onDelete } = useClassDelete();

  return (
    <>
      <table className="table-custom">
        <thead className="">
          <tr>
            <th className="table-head-cell">No</th>
            <th className="table-head-cell">Kelas</th>
            <th className="table-head-cell">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {isLoading ? (
            <ClassTableSkeleton />
          ) : data?.length === 0 ? (
            <tr>
              <td colSpan={3} className="py-6 border-b border-app-border">
                <EmptyState />
              </td>
            </tr>
          ) : (
            data?.map((item, index) => (
              <tr className="table-body-row">
                <td className="table-body-cell">{index + 1}</td>
                <td className="table-body-cell">
                  {item.level}-{item.major}-{item.section}
                </td>
                <td className="table-body-cell flex space-x-2">
                  <Button
                    variant="table"
                    onClick={() => navigate(`${item.id}/edit`)}
                  >
                    <MdEdit size={18} />
                  </Button>
                  <Button variant="table" onClick={() => onDelete(item.id)}>
                    <MdDelete size={18} />
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default ClassTable;

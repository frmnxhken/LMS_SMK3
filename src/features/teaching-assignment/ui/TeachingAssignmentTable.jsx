import React from "react";
import Button from "@/shared/ui/buttons/Button";
import EmptyState from "@/shared/ui/Feedback/EmptyState";
import TeachingAssignmentTableSkeleton from "./skeletons/TeachingAssignmentTableSkeleton";
import { useNavigate } from "react-router";
import useTeachingAssignmentDelete from "../hooks/useTeachingAssignmentDelete";
import { MdDelete, MdEdit } from "react-icons/md";

const TeachingAssignmentTable = ({ isLoading, data, status }) => {
  const navigate = useNavigate();
  const { onDelete } = useTeachingAssignmentDelete();

  return (
    <table className="table-custom">
      <thead className="">
        <tr>
          <th className="table-head-cell">No</th>
          <th className="table-head-cell">Mapel</th>
          <th className="table-head-cell">Kelas</th>
          <th className="table-head-cell">NIP</th>
          <th className="table-head-cell">Guru</th>
          {status !== "completed" && <th className="table-head-cell">Aksi</th>}
        </tr>
      </thead>
      <tbody className="text-xs">
        {isLoading ? (
          <TeachingAssignmentTableSkeleton />
        ) : data.length === 0 ? (
          <tr className="table-body-row">
            <td className="table-body-cell" colSpan={6}>
              <EmptyState />
            </td>
          </tr>
        ) : (
          data?.map((item, index) => (
            <tr className="table-body-row">
              <td className="table-body-cell">{index + 1}</td>
              <td className="table-body-cell">{item.subject}</td>
              <td className="table-body-cell">
                {item.level + " " + item.major + "" + item.section}
              </td>
              <td className="table-body-cell">{item.nip}</td>
              <td className="table-body-cell">{item.teacher}</td>
              {status !== "completed" && (
                <td className="table-body-cell flex space-x-2">
                  <Button
                    disabled={status !== "draft"}
                    variant="table"
                    onClick={() => navigate(`${item.id}/edit`)}
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
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TeachingAssignmentTable;

import React from "react";
import Button from "@/shared/ui/buttons/Button";
import EmptyState from "@/shared/ui/Feedback/EmptyState";
import TeachingAssignmentTableSkeleton from "./skeletons/TeachingAssignmentTableSkeleton";
import { useNavigate } from "react-router";
import useTeachingAssignmentDelete from "../hooks/useTeachingAssignmentDelete";

const TeachingAssignmentTable = ({ isLoading, data }) => {
  const navigate = useNavigate();
  const { handleDelete } = useTeachingAssignmentDelete();

  const onDelete = (id) => {
    let confirmed = confirm("Apakah Anda Yakin ?");
    if (confirmed) handleDelete(id);
  };

  return (
    <table className="table-custom">
      <thead className="">
        <tr>
          <th className="table-head-cell">No</th>
          <th className="table-head-cell">Mapel</th>
          <th className="table-head-cell">Kelas</th>
          <th className="table-head-cell">NIP</th>
          <th className="table-head-cell">Guru</th>
          <th className="table-head-cell">Aksi</th>
        </tr>
      </thead>
      {isLoading && <TeachingAssignmentTableSkeleton />}
      <tbody className="text-xs">
        {!isLoading && data.length === 0 ? (
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
              <td className="table-body-cell flex space-x-2">
                <Button onClick={() => navigate(`${item.id}/edit`)}>
                  Edit
                </Button>
                <Button onClick={() => onDelete(item.id)} variant="outline">
                  Delete
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TeachingAssignmentTable;

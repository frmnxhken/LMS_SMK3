import React from "react";
import { useNavigate } from "react-router";
import Button from "@/shared/ui/buttons/Button";
import EmptyState from "@/shared/ui/Feedback/EmptyState";
import TeacherTableSkeleton from "./skeletons/TeacherTableSkeleton";
import useTeacherDelete from "../hooks/useTeacherDelete";

const TeacherTable = ({ teachers, isLoading }) => {
  const navigate = useNavigate();
  const { handleDelete } = useTeacherDelete();

  const onDelete = (id) => {
    let confirmed = confirm("Apakah Anda yakin untuk dihapus?");
    if (confirmed) handleDelete(id);
  };

  return (
    <table className="table-custom">
      <thead className="">
        <tr>
          <th className="table-head-cell">No</th>
          <th className="table-head-cell">NIP</th>
          <th className="table-head-cell">Nama</th>
          <th className="table-head-cell">Username</th>
          <th className="table-head-cell">Telepon</th>
          <th className="table-head-cell">Aksi</th>
        </tr>
      </thead>
      {isLoading && <TeacherTableSkeleton />}
      <tbody className="text-xs">
        {!isLoading && teachers.length === 0 ? (
          <tr className="table-body-row">
            <td className="table-body-cell" colSpan={6}>
              <EmptyState />
            </td>
          </tr>
        ) : (
          teachers?.map((teacher, index) => (
            <tr className="table-body-row">
              <td className="table-body-cell">{index + 1}</td>
              <td className="table-body-cell">{teacher.nip}</td>
              <td className="table-body-cell">{teacher.name}</td>
              <td className="table-body-cell">{teacher.username}</td>
              <td className="table-body-cell">{teacher.phone}</td>
              <td className="table-body-cell flex space-x-2">
                <Button onClick={() => navigate(`${teacher.id}/edit`)}>
                  Edit
                </Button>
                <Button onClick={() => onDelete(teacher.id)} variant="outline">
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

export default TeacherTable;

import React from "react";
import { useNavigate } from "react-router";
import Button from "@/shared/ui/buttons/Button";
import EmptyState from "@/shared/ui/Feedback/EmptyState";
import TeacherTableSkeleton from "./skeletons/TeacherTableSkeleton";
import useTeacherDelete from "../hooks/useTeacherDelete";
import { MdDelete, MdEdit } from "react-icons/md";

const TeacherTable = ({ teachers = [], isLoading, status }) => {
  const navigate = useNavigate();
  const { onDelete } = useTeacherDelete();

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
      <tbody className="text-xs">
        {isLoading ? (
          <TeacherTableSkeleton />
        ) : teachers.length === 0 ? (
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
                <Button
                  disabled={status !== "draft"}
                  variant="table"
                  onClick={() => navigate(`${teacher.id}/edit`)}
                >
                  <MdEdit size={18} />
                </Button>
                <Button
                  disabled={status !== "draft"}
                  variant="table"
                  onClick={() => onDelete(teacher.id)}
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

export default TeacherTable;

import React from "react";
import { useNavigate } from "react-router";
import Button from "@/shared/ui/buttons/Button";
import EmptyState from "@/shared/ui/Feedback/EmptyState";
import useStudentDelete from "../hooks/useStudentDelete";
import { MdDelete, MdEdit } from "react-icons/md";
import StudentTableSkeleton from "./skeletons/StudentTableSkeleton";

const StudentTable = ({ students = [], page, isLoading }) => {
  const navigate = useNavigate();
  const { onDelete } = useStudentDelete();

  return (
    <table className="table-custom">
      <thead className="">
        <tr>
          <th className="table-head-cell">No</th>
          <th className="table-head-cell">NIS</th>
          <th className="table-head-cell">Nama</th>
          <th className="table-head-cell">Username</th>
          <th className="table-head-cell">Kelas</th>
          <th className="table-head-cell">Aksi</th>
        </tr>
      </thead>
      <tbody className="text-xs">
        {isLoading ? (
          <StudentTableSkeleton />
        ) : students.length === 0 ? (
          <tr className="table-body-row">
            <td className="table-body-cell" colSpan={6}>
              <EmptyState />
            </td>
          </tr>
        ) : (
          students?.map((student, index) => (
            <tr className="table-body-row">
              <td className="table-body-cell">{(page - 1) * 10 + index + 1}</td>
              <td className="table-body-cell">{student.nis}</td>
              <td className="table-body-cell">{student.name}</td>
              <td className="table-body-cell">{student.username}</td>
              <td className="table-body-cell">
                {student.level + " " + student.major + " " + student.section}
              </td>
              <td className="table-body-cell flex space-x-2">
                <Button
                  variant="table"
                  onClick={() => navigate(`${student.id}/edit`)}
                >
                  <MdEdit size={18} />
                </Button>
                <Button variant="table" onClick={() => onDelete(student.id)}>
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

export default StudentTable;

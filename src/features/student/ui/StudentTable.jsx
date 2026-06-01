import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import { useNavigate } from "react-router";
import useStudentDelete from "../hooks/useStudentDelete";
import StudentTableSkeleton from "./skeletons/StudentTableSkeleton";
import EmptyState from "@/shared/ui/Feedback/EmptyState";

const StudentTable = ({ students, page, isLoading }) => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  const { handleDelete } = useStudentDelete(selectedId);

  const onDelete = (id) => {
    setSelectedId(id);
    let confirmed = confirm("Apakah Anda Yakin Untuk Dihapus?");
    if (confirmed) handleDelete();
  };

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
      {isLoading && <StudentTableSkeleton />}
      <tbody className="text-xs">
        {!isLoading && students.length === 0 ? (
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
              <td className="table-body-cell space-x-2">
                <Button onClick={() => navigate(`${student.id}/edit`)}>
                  Edit
                </Button>
                <Button variant="outline" onClick={() => onDelete(student.id)}>
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

export default StudentTable;

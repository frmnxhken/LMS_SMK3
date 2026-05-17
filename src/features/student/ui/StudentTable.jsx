import Badge from "@/shared/ui/Feedback/Badge";
import Button from "@/shared/ui/buttons/Button";
import React from "react";

const StudentTable = ({ students }) => {
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
        {students?.map((student, index) => (
          <tr className="table-body-row">
            <td className="table-body-cell">{index + 1}</td>
            <td className="table-body-cell">{student.nis}</td>
            <td className="table-body-cell">{student.name}</td>
            <td className="table-body-cell">{student.username}</td>
            <td className="table-body-cell">
              {student.level + " " + student.major}
            </td>
            <td className="table-body-cell space-x-2">
              <Button>Edit</Button>
              <Button variant="outline">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;

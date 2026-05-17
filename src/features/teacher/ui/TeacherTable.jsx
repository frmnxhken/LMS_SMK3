import React from "react";
import Button from "@/shared/ui/buttons/Button";

const TeacherTable = ({ teachers }) => {
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
        {teachers?.map((teacher, index) => (
          <tr className="table-body-row">
            <td className="table-body-cell">{index + 1}</td>
            <td className="table-body-cell">{teacher.nip}</td>
            <td className="table-body-cell">{teacher.name}</td>
            <td className="table-body-cell">{teacher.username}</td>
            <td className="table-body-cell">{teacher.phone}</td>
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

export default TeacherTable;

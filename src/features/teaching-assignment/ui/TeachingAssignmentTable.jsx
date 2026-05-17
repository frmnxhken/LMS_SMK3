import React from "react";
import Button from "@/shared/ui/buttons/Button";

const TeachingAssignmentTable = ({ data }) => {
  return (
    <table className="table-custom">
      <thead className="">
        <tr>
          <th className="table-head-cell">No</th>
          <th className="table-head-cell">Mapel</th>
          <th className="table-head-cell">Kelas</th>
          <th className="table-head-cell">NIP</th>
          <th className="table-head-cell">Nama Guru</th>
          <th className="table-head-cell">Aksi</th>
        </tr>
      </thead>
      <tbody className="text-xs">
        {data?.map((d, index) => (
          <tr className="table-body-row">
            <td className="table-body-cell">{index + 1}</td>
            <td className="table-body-cell">{d.subject}</td>
            <td className="table-body-cell">{d.level + " " + d.major}</td>
            <td className="table-body-cell">{d.nip}</td>
            <td className="table-body-cell">{d.teacher}</td>
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

export default TeachingAssignmentTable;

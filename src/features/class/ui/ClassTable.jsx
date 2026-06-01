import React from "react";
import Button from "@/shared/ui/buttons/Button";
import useClassDelete from "../hooks/useClassDelete";
import { useNavigate } from "react-router";

const ClassTable = ({ data }) => {
  const navigate = useNavigate();
  const { handleDelete } = useClassDelete();

  const onDelete = (id) => {
    let confirmed = confirm("Anda yakin untuk dihapus ?");
    if (confirmed) handleDelete(id);
  };

  return (
    <>
      <table className="table-custom">
        <thead className="">
          <tr>
            <th className="table-head-cell">No</th>
            <th className="table-head-cell">Tingkatan</th>
            <th className="table-head-cell">Jurusan</th>
            <th className="table-head-cell">Kelas</th>
            <th className="table-head-cell">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {data?.map((item, index) => (
            <tr className="table-body-row">
              <td className="table-body-cell">{index + 1}</td>
              <td className="table-body-cell">{item.level}</td>
              <td className="table-body-cell">{item.major}</td>
              <td className="table-body-cell">{item.section}</td>
              <td className="table-body-cell space-x-2">
                <Button onClick={() => navigate(`${item.id}/edit`)}>
                  Edit
                </Button>
                <Button onClick={() => onDelete(item.id)} variant="outline">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ClassTable;

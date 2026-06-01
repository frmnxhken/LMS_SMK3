import Badge from "@/shared/ui/Feedback/Badge";
import Button from "@/shared/ui/buttons/Button";
import React from "react";

const AcademicTable = ({ academies }) => {
  return (
    <table className="table-custom">
      <thead className="">
        <tr>
          <th className="table-head-cell">No</th>
          <th className="table-head-cell">Tahun Akademik</th>
          <th className="table-head-cell">Status</th>
          <th className="table-head-cell">Aksi</th>
        </tr>
      </thead>
      <tbody className="text-xs">
        {academies?.data.map((item, index) => (
          <tr className="table-body-row">
            <td className="table-body-cell">{index + 1}</td>
            <td className="table-body-cell">{item.name}</td>
            <td className="table-body-cell">
              <Badge
                variant={item.is_active === 1 ? "success" : "dark"}
                label={item.is_active === 1 ? "aktif" : "tidak aktif"}
              />
            </td>
            <td className="table-body-cell">
              {item.is_active === 1 ? (
                <Button variant="success">Nonaktifkan</Button>
              ) : (
                <Button>Aktifkan</Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AcademicTable;

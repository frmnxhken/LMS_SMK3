import Badge from "@/shared/ui/Feedback/Badge";
import Button from "@/shared/ui/buttons/Button";
import React from "react";

const AcademicTable = ({ data }) => {
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
        {data.map((item, index) => (
          <tr className="table-body-row">
            <td className="table-body-cell">{index + 1}</td>
            <td className="table-body-cell">{item.tahunAkademik}</td>
            <td className="table-body-cell">
              <Badge
                variant={item.status === "aktif" ? "success" : "dark"}
                label={item.status}
              />
            </td>
            <td className="table-body-cell">
              <Button>Aktifkan</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AcademicTable;

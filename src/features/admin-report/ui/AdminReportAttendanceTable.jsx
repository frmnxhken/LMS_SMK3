import React from "react";
import Badge from "@/shared/ui/Feedback/Badge";
import data from "@/shared/data/dummy/attendance.json";
import Button from "@/shared/ui/buttons/Button";
import { MdEdit } from "react-icons/md";

const AdminReportAttendanceTable = () => {
  return (
    <div className="table-responsive">
      <table className="table-custom">
        <thead>
          <tr>
            <th className="table-head-cell">Tanggal</th>
            <th className="table-head-cell">Nama</th>
            <th className="table-head-cell">NIS</th>
            <th className="table-head-cell">Waktu Masuk</th>
            <th className="table-head-cell">Status</th>
            <th className="table-head-cell">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {data.map((item, i) => (
            <tr className="table-body-row">
              <td className="table-body-cell border-r border-app-border">
                {item.tanggal}
              </td>
              <td className="table-body-cell">{item.nama}</td>
              <td className="table-body-cell">{item.nis}</td>
              <td className="table-body-cell">{item.waktu_masuk}</td>
              <td className="table-body-cell">
                <span className="badge badge-done">
                  <Badge variant="success" label="Hadir" />
                </span>
              </td>
              <td>
                <Button variant="table">
                  <MdEdit size={18} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminReportAttendanceTable;

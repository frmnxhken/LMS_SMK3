import React from "react";
import Badge from "@/shared/ui/Feedback/Badge";
import Button from "@/shared/ui/buttons/Button";
import { MdEdit } from "react-icons/md";
import AdminReportHistoryTableSkeleton from "./skeletons/AdminReportHistoryTableSkeleton";

const AdminReportHistoryTable = ({ data, isLoading }) => {
  const statusMapping = {
    late: "Terlambat",
    sick: "Sakit",
    permission: "Izin",
  };

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
        {isLoading && <AdminReportHistoryTableSkeleton />}
        <tbody className="text-xs">
          {data?.map((item, i) => (
            <tr className="table-body-row">
              <td className="table-body-cell border-r border-app-border">
                {item.date}
              </td>
              <td className="table-body-cell">{item.name}</td>
              <td className="table-body-cell">{item.nis}</td>
              <td className="table-body-cell">{item.arrival_time ?? "-"}</td>
              <td className="table-body-cell">
                {item.date ? (
                  item.status === "present" ? (
                    <Badge variant="success" label="Hadir" />
                  ) : (
                    <Badge
                      variant="warning"
                      label={statusMapping[item.status]}
                    />
                  )
                ) : (
                  "-"
                )}
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

export default AdminReportHistoryTable;

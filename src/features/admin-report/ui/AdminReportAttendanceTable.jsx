import React from "react";
import Badge from "@/shared/ui/Feedback/Badge";
import Button from "@/shared/ui/buttons/Button";
import { MdEdit } from "react-icons/md";
import AdminReportAttendanceTableSkeleton from "./skeletons/AdminReportAttendanceTableSkeleton";
import EmptyState from "@/shared/ui/Feedback/EmptyState";

const AdminReportAttendanceTable = ({ data, isLoading, onEdit }) => {
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
            <th className="table-head-cell">Nama</th>
            <th className="table-head-cell">NIS</th>
            <th className="table-head-cell">Waktu Masuk</th>
            <th className="table-head-cell">Status</th>
            <th className="table-head-cell">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {isLoading ? (
            <AdminReportAttendanceTableSkeleton />
          ) : data?.length === 0 ? (
            <td className="table-body-row" colSpan={5}>
              <EmptyState />
            </td>
          ) : (
            data?.map((item, i) => (
              <tr className="table-body-row">
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
                  <Button onClick={() => onEdit(item)} variant="table">
                    <MdEdit size={18} />
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminReportAttendanceTable;

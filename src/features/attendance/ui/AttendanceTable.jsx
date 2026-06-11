import React from "react";
import AttendanceTableSkeleton from "./skeletons/AttendanceTableSkeleton";
import EmptyState from "@/shared/ui/Feedback/EmptyState";
import Badge from "@/shared/ui/Feedback/Badge";

const AttendanceTable = ({ data = [], isLoading }) => {
  const statusMapping = {
    late: "Terlambat",
    sick: "Sakit",
    permission: "Izin",
  };

  return (
    <table className="table-custom">
      <thead>
        <tr>
          <th className="table-head-cell">No</th>
          <th className="table-head-cell">Tanggal</th>
          <th className="table-head-cell text-center">Waktu Masuk</th>
          <th className="table-head-cell text-center">Status</th>
        </tr>
      </thead>
      <tbody className="text-xs">
        {isLoading ? (
          <AttendanceTableSkeleton />
        ) : data?.length === 0 ? (
          <td colSpan={4} className="table-body-cell">
            <EmptyState />
          </td>
        ) : (
          data?.map((attendance, index) => (
            <tr className="table-body-row">
              <td className="table-body-cell">{index + 1}</td>
              <td className="table-body-cell">{attendance.date}</td>
              <td className="table-body-cell text-center">
                {attendance.arrival_time}
              </td>
              <td className="table-body-cell text-center">
                {attendance.date ? (
                  attendance.status === "present" ? (
                    <Badge variant="success" label="Hadir" />
                  ) : (
                    <Badge
                      variant="warning"
                      label={statusMapping[attendance.status]}
                    />
                  )
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default AttendanceTable;

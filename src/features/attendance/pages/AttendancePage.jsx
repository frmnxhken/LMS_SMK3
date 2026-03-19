import React, { useState } from "react";
import AttendanceCard from "../ui/AttendanceCard";

const AttendancePage = () => {
  return (
    <div className="p-6 max-w-[1080px] mx-auto">
      <h1 className="text-xl font-bold text-text-heading mb-6">Absensi</h1>

      <AttendanceCard
        status="active"
        distance={120}
        isInRange={true}
        onRefresh={() => console.log("Refresh lokasi...")}
        onAbsen={() => console.log("Proses absen...")}
      />

      <div className="flex items-center justify-between mb-4 mt-6">
        <h3 className="text-md font-semibold text-text-heading px-1">
          Riwayat Kehadiran
        </h3>
        <button className="text-sm font-semibold text-primary hover:underline">
          Lihat Semua
        </button>
      </div>

      <div className="table-responsive">
        <table className="table-custom">
          <thead>
            <tr>
              <th className="table-head-cell">No</th>
              <th className="table-head-cell">Tanggal</th>
              <th className="table-head-cell text-center">Waktu Masuk</th>
              <th className="table-head-cell text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-body-row">
              <td className="table-body-cell">1</td>
              <td className="table-body-cell">10 Mar 2026</td>
              <td className="table-body-cell text-center">07:45:12</td>
              <td className="table-body-cell text-center">
                <span className="badge badge-done">Tepat Waktu</span>
              </td>
            </tr>
            <tr className="table-body-row">
              <td className="table-body-cell">2</td>
              <td className="table-body-cell">9 Mar 2026</td>
              <td className="table-body-cell text-center">07:45:12</td>
              <td className="table-body-cell text-center">
                <span className="badge badge-done">Tepat Waktu</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendancePage;

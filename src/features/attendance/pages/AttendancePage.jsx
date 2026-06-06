import React, { useEffect, useState } from "react";
import AttendanceCard from "../ui/AttendanceCard";
import Badge from "@/shared/ui/Feedback/Badge";
import { Haversine } from "@/shared/lib/Haversine";
import useAttendanceCreate from "../hooks/useAttendanceCreate";

const AttendancePage = () => {
  const [locationState, setLocationState] = useState({
    status: "searching",
    distance: 0,
    isInRange: false,
  });
  const [position, setPosition] = useState({
    latitude: "",
    longitude: "",
  });

  const OFFICE_COORD = { lat: -7.158017, lng: 113.470154 };
  const MAX_RADIUS = 150;
  const { handleSubmit } = useAttendanceCreate();

  const updateLocation = () => {
    setLocationState((prev) => ({ ...prev, status: "searching" }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const myPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        const dist = Haversine(myPosition, OFFICE_COORD);

        setLocationState({
          status: "active",
          distance: Math.round(dist),
          isInRange: dist <= MAX_RADIUS,
        });
      },
      (error) => {
        setLocationState({
          status: error.code === 1 ? "denied" : "disabled",
          distance: 0,
          isInRange: false,
        });
      },
      { enableHighAccuracy: true, timeout: 5000 },
    );
  };

  useEffect(() => {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "denied") {
        setLocationState((prev) => ({ ...prev, status: "denied" }));
      } else {
        updateLocation();
      }
    });
  }, []);

  const onSubmit = () => {
    if (handleSubmit) {
      handleSubmit(position);
    }
  };

  return (
    <div className="p-6 max-w-[1080px] mx-auto">
      <h1 className="text-xl font-bold text-text-heading mb-6">Absensi</h1>

      <AttendanceCard
        status={locationState.status}
        distance={locationState.distance}
        isInRange={locationState.isInRange}
        onRefresh={updateLocation}
        onAbsen={onSubmit}
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
          <tbody className="text-xs">
            <tr className="table-body-row">
              <td className="table-body-cell">1</td>
              <td className="table-body-cell">10 Mar 2026</td>
              <td className="table-body-cell text-center">07:45:12</td>
              <td className="table-body-cell text-center">
                <span className="badge badge-done">
                  <Badge variant="success" label="Hadir" />
                </span>
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

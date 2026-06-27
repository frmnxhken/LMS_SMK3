import React, { useEffect, useState } from "react";
import AttendanceCard from "../ui/AttendanceCard";
import { Haversine } from "@/shared/lib/Haversine";
import useAttendanceCreate from "../hooks/useAttendanceCreate";
import useAttendance from "../hooks/useAttendance";
import AttendanceTable from "../ui/AttendanceTable";

export const AttendancePage = () => {
  const { data, isLoading } = useAttendance();

  const [locationState, setLocationState] = useState({
    status: "searching",
    distance: 0,
    isInRange: false,
  });

  const [position, setPosition] = useState({
    latitude: "",
    longitude: "",
  });

  const SCHOOL_COORD = {
    lat: parseFloat(data?.meta?.latitude),
    lng: parseFloat(data?.meta?.longitude),
  };
  const MAX_RADIUS = parseInt(data?.meta?.radius);
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

        const dist = Haversine(myPosition, SCHOOL_COORD);

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

      {!isLoading && data?.meta.is_school_day !== 1 && (
        <div className="bg-green-50 border-l-4 border-emerald-500 p-3 mb-6 rounded">
          <h3 className="text-lg font-semibold text-emerald-600">Libur</h3>
          <p className="text-emerald-600 text-xs font-medium">
            {data?.meta?.description}
          </p>
        </div>
      )}

      <AttendanceCard
        status={locationState.status}
        distance={locationState.distance}
        isInRange={locationState.isInRange}
        onRefresh={updateLocation}
        onAbsen={onSubmit}
        isSchoolDay={data?.meta?.is_school_day}
      />

      <div className="flex items-center justify-between mb-4 mt-6">
        <h3 className="text-md font-semibold text-text-heading px-1">
          Riwayat Kehadiran
        </h3>
      </div>

      <div className="table-responsive">
        <AttendanceTable data={data?.data} isLoading={isLoading} />
      </div>
    </div>
  );
};

import React from "react";
import { HiCheckCircle, HiExclamation, HiOutlineRefresh } from "react-icons/hi";
import { MdGpsOff, MdGpsFixed } from "react-icons/md";
import { FiNavigation } from "react-icons/fi";
import Button from "@/shared/ui/buttons/Button";

const AttendanceCard = ({
  status,
  distance,
  isInRange,
  onRefresh,
  onAbsen,
  isSchoolDay,
}) => {
  const isGpsOff = ["disabled", "denied"].includes(status);
  const isLoading = status === "searching";
  const canAbsen = status === "active" && isInRange;

  return (
    <div className="bg-white rounded-xl border border-app-border overflow-hidden">
      {isGpsOff && (
        <div className="bg-red-50 border-b border-red-100 px-6 py-3 flex items-center gap-2">
          <HiExclamation className="text-red-500" />
          <p className="text-[11px] font-extrabold text-red-600 uppercase">
            Akses Lokasi Diperlukan
          </p>
        </div>
      )}

      <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6 w-full">
          <div
            className={`w-20 h-20 rounded-3xl flex items-center justify-center ${canAbsen ? "bg-green-100 text-green-600" : "bg-slate-50 text-slate-400"}`}
          >
            {status === "active" ? (
              <MdGpsFixed
                size={36}
                className={isLoading ? "animate-pulse" : ""}
              />
            ) : (
              <MdGpsOff size={36} />
            )}
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              Geolocation
            </span>
            <h2 className="text-2xl font-black text-slate-800">
              {status === "active"
                ? `${distance} Meter`
                : isGpsOff
                  ? "GPS Mati"
                  : "Mencari..."}
              {canAbsen && (
                <HiCheckCircle className="inline ml-2 text-green-500" />
              )}
            </h2>
            <button
              onClick={onRefresh}
              className="text-[11px] font-bold text-primary flex items-center gap-1 mt-1 underline cursor-pointer"
            >
              <HiOutlineRefresh className={isLoading ? "animate-spin" : ""} />
              {isGpsOff ? "AKTIFKAN GPS" : "PERBARUI POSISI"}
            </button>
          </div>
        </div>

        <div className="w-full md:w-auto flex flex-col items-center gap-2">
          {isSchoolDay === 1 && (
            <>
              <Button size="md" disabled={!canAbsen} onClick={onAbsen}>
                <FiNavigation className={canAbsen ? "animate-bounce" : ""} />
                Absen
              </Button>
              {!canAbsen && status === "active" && (
                <p className="text-[10px] font-bold text-orange-500 uppercase">
                  Radius Maksimal 50 Meter
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;

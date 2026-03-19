import React from "react";
import {
  HiOutlineLocationMarker,
  HiCheckCircle,
  HiExclamation,
  HiOutlineRefresh,
} from "react-icons/hi";
import { MdGpsOff, MdGpsFixed } from "react-icons/md";
import { FiNavigation } from "react-icons/fi";

const AttendanceCard = ({
  status,
  distance,
  isInRange,
  onRefresh,
  onAbsen,
}) => {
  // status: 'idle', 'searching', 'active', 'disabled', 'denied'
  const isGpsOff = status === "disabled" || status === "denied";

  return (
    <div className="bg-white rounded-xl border border-app-border overflow-hidden">
      {isGpsOff && (
        <div className="bg-red-50 border-b border-red-100 px-6 py-3 flex items-center gap-2">
          <HiExclamation className="text-red-500 text-lg" />
          <p className="text-[11px] font-extrabold text-red-600 uppercase tracking-tight">
            Akses Lokasi Diperlukan untuk Melakukan Presensi
          </p>
        </div>
      )}

      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div
              className={`flex-shrink-0 w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 ${
                status === "active" && isInRange
                  ? "bg-green-100 text-green-600 shadow-inner"
                  : isGpsOff
                    ? "bg-red-50 text-red-400"
                    : "bg-slate-50 text-slate-400"
              }`}
            >
              {status === "active" ? (
                <MdGpsFixed
                  size={36}
                  className={status === "searching" ? "animate-pulse" : ""}
                />
              ) : (
                <MdGpsOff size={36} />
              )}
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                Geolocation
              </span>
              <h2
                className={`text-2xl font-black tracking-tight leading-none ${isGpsOff ? "text-red-500" : "text-slate-800"}`}
              >
                {status === "active"
                  ? `${distance} Meter`
                  : isGpsOff
                    ? "GPS Mati"
                    : "Mencari Lokasi..."}
                {status === "active" && isInRange && (
                  <HiCheckCircle className="inline ml-2 text-green-500" />
                )}
              </h2>

              <button
                onClick={onRefresh}
                className={`flex items-center gap-1.5 text-[11px] font-bold mt-1 transition-all hover:opacity-75 ${
                  isGpsOff ? "text-red-500" : "text-[--color-primary]"
                }`}
              >
                <HiOutlineRefresh
                  className={`${status === "searching" ? "animate-spin" : ""} text-sm`}
                />
                <span className="underline decoration-2 underline-offset-4">
                  {status === "disabled" ? "AKTIFKAN GPS" : "PERBARUI POSISI"}
                </span>
              </button>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col items-center gap-2">
            <button
              disabled={!isInRange}
              onClick={onAbsen}
              className={`group relative w-full md:w-[220px] py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 transition-all duration-300 ${
                isInRange
                  ? "bg-primary text-white hover:bg-primary-dark active:scale-95"
                  : "bg-slate-100 text-slate-300 cursor-not-allowed border border-slate-200"
              }`}
            >
              <FiNavigation
                size={18}
                className={isInRange ? "animate-bounce" : ""}
              />
              ABSEN SEKARANG
            </button>

            {status === "active" && !isInRange && (
              <p className="text-[10px] font-bold text-orange-500 uppercase tracking-tighter">
                Radius Maksimal 50 Meter
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;

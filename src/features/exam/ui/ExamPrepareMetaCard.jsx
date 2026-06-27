import React from "react";
import {
  IoTimeOutline,
  IoAlertCircleOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";

const ExamPrepareMetaCard = ({ duration, dueDate, start }) => {
  return (
    <div className="md:col-span-1 space-y-4">
      <div className="p-4 border border-app-border rounded-xl space-y-4 bg-white">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 text-primary rounded-lg shrink-0">
            <IoTimeOutline size={18} />
          </div>
          <div>
            <p className="text-xs text-text-muted font-bold uppercase tracking-wide">
              Durasi
            </p>
            <p className="text-sm font-semibold text-slate-800">
              {duration} Menit
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500 text-white rounded-lg shrink-0">
            <IoAlertCircleOutline size={18} />
          </div>
          <div>
            <p className="text-xs text-text-muted font-bold uppercase tracking-wide">
              Ujian Dimulai
            </p>
            <p className="text-sm font-semibold text-emerald-600">{start}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-rose-500 text-white rounded-lg shrink-0">
            <IoAlertCircleOutline size={18} />
          </div>
          <div>
            <p className="text-xs text-text-muted font-bold uppercase tracking-wide">
              Batas Pengerjaan
            </p>
            <p className="text-sm font-semibold text-rose-600">{dueDate}</p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-amber-50/60 border border-amber-100 rounded-xl flex gap-3">
        <IoInformationCircleOutline
          className="text-amber-600 shrink-0"
          size={24}
        />
        <p className="text-xs text-amber-800 leading-normal font-medium">
          Waktu dihitung mundur sejak tombol mulai ditekan. Pastikan daya
          baterai dan internet kamu stabil.
        </p>
      </div>
    </div>
  );
};

export default ExamPrepareMetaCard;

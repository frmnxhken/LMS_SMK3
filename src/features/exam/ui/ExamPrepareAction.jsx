import React from "react";

const ExamPrepareAction = ({ isAgreed, onAgreeChange, onStart }) => {
  return (
    <div className="border-t border-slate-100 space-y-4 py-4 pt-12">
      <label className="flex items-start gap-3 cursor-pointer group select-none">
        <input
          type="checkbox"
          checked={isAgreed}
          onChange={(e) => onAgreeChange(e.target.checked)}
          className="w-4 h-4 mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer transition-colors"
        />
        <span className="text-xs sm:text-sm text-slate-500 group-hover:text-slate-800 transition-colors leading-normal">
          Saya menyatakan siap mengikuti ujian dan akan mematuhi segala tata
          tertib yang telah ditentukan di atas.
        </span>
      </label>

      <button
        disabled={!isAgreed}
        onClick={onStart}
        className={`w-full py-3 px-4 font-bold text-center rounded-xl transition-all text-xs tracking-wider uppercase ${
          isAgreed
            ? "bg-slate-900 hover:bg-slate-800 text-white shadow-xs cursor-pointer"
            : "bg-slate-100 text-slate-400 cursor-not-allowed"
        }`}
      >
        Mulai Ujian Sekarang
      </button>
    </div>
  );
};

export default ExamPrepareAction;

import React from "react";

const ExamPrepareRules = () => {
  const rules = [
    "Kerjakan ujian secara mandiri, jujur, dan penuh tanggung jawab.",
    "Dilarang membuka tab browser lain, berpindah aplikasi, atau meniru jawaban siswa lain selama ujian berlangsung.",
    "Sistem akan menyimpan jawaban kamu secara otomatis setiap kali berpindah nomor soal.",
    "Jika waktu pengerjaan habis, sistem akan mengunci halaman dan mengirimkan seluruh jawaban yang tersimpan.",
  ];

  return (
    <div className="md:col-span-2 space-y-4">
      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
        Tata Tertib & Petunjuk Ujian
      </h2>
      <ol className="space-y-4 text-sm text-slate-600 list-decimal list-inside pl-1">
        {rules.map((rule, index) => (
          <li key={index} className="leading-relaxed pl-2 -indent-5">
            {rule}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExamPrepareRules;

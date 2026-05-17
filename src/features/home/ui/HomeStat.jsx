import React from "react";
import { IoCheckmarkCircle, IoBook, IoTime } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa6";
import StatCard from "@/shared/ui/cards/StatCard";

const stats = [
  {
    title: "Kehadiran",
    value: "95%",
    subtext: "20 Hari tercatat",
    icon: IoCheckmarkCircle,
    iconColor: "text-green-500",
  },
  {
    title: "Tugas Aktif",
    value: "3",
    subtext: "2 Segera berakhir",
    icon: FaClipboardList,
    iconColor: "text-orange-500",
  },
  {
    title: "Jumlah Materi",
    value: "12",
    icon: IoBook,
  },
];

const HomeStat = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default HomeStat;

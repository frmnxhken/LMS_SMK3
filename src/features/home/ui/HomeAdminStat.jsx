import React from "react";
import { PiStudentBold } from "react-icons/pi";
import {
  FaClipboardList,
  FaChalkboardTeacher,
  FaChalkboard,
} from "react-icons/fa";
import StatCard from "@/shared/ui/cards/StatCard";
import { IoBook } from "react-icons/io5";

const stats = [
  {
    title: "Jumlah Guru",
    value: "39",
    icon: FaChalkboardTeacher,
    iconColor: "text-emerald-500",
    iconBgColor: "bg-emerald-500/10",
  },
  {
    title: "Jumlah Siswa",
    value: "327",
    icon: PiStudentBold,
    iconColor: "text-blue-500",
    iconBgColor: "bg-blue-500/10",
  },
  {
    title: "Jumlah Kelas",
    value: "29",
    icon: FaChalkboard,
    iconColor: "text-indigo-500",
    iconBgColor: "bg-indigo-500/10",
  },
  {
    title: "Jumlah Mapel",
    value: "13",
    icon: IoBook,
    iconColor: "text-black",
    iconBgColor: "bg-gray-500/10",
  },
];

const HomeAdminStat = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default HomeAdminStat;

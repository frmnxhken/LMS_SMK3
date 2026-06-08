import React from "react";
import { PiStudentBold } from "react-icons/pi";
import {
  FaClipboardList,
  FaChalkboardTeacher,
  FaChalkboard,
} from "react-icons/fa";
import StatCard from "@/shared/ui/cards/StatCard";
import { IoBook } from "react-icons/io5";

const HomeAdminStat = ({ stats }) => {
  const statMaps = [
    {
      title: "Jumlah Guru",
      value: stats?.teacher_total,
      icon: FaChalkboardTeacher,
      iconColor: "text-emerald-500",
      iconBgColor: "bg-emerald-500/10",
    },
    {
      title: "Jumlah Siswa",
      value: stats?.student_total,
      icon: PiStudentBold,
      iconColor: "text-blue-500",
      iconBgColor: "bg-blue-500/10",
    },
    {
      title: "Jumlah Kelas",
      value: stats?.class_total,
      icon: FaChalkboard,
      iconColor: "text-indigo-500",
      iconBgColor: "bg-indigo-500/10",
    },
    {
      title: "Jumlah Mapel",
      value: stats?.subject_total,
      icon: IoBook,
      iconColor: "text-black",
      iconBgColor: "bg-gray-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {statMaps.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default HomeAdminStat;

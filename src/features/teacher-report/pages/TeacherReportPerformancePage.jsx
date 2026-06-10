import React from "react";
import StatCard from "@/shared/ui/cards/StatCard";
import { FaFilePen, FaAward } from "react-icons/fa6";
import { useParams } from "react-router";
import useTeacherReportPerson from "../hooks/useTeacherReportPerson";
import TeacherReportPersonProfile from "../ui/TeacherReportPersonProfile";
import TeacherReportPersonCard from "../ui/TeacherReportPersonCard";
import TeacherReportPersonStatSkeleton from "../ui/skeletons/TeacherReportPersonStatSkeleton";
import TeacherReportPersonCardSkeleton from "../ui/skeletons/TeacherReportPersonCardSkeleton";
import TeacherReportPersonProfileSkeleton from "../ui/skeletons/TeacherReportPersonProfileSkeleton";
import TeacherReportPersonHeader from "../ui/TeacherReportPersonHeader";

export const TeacherReportPerformancePage = () => {
  const { id_class, id_student } = useParams();
  const { data, isLoading } = useTeacherReportPerson(id_class, id_student);
  const dailyExams = data?.exams.filter((exam) => exam.type === "harian");
  const uts = data?.exams.filter((exam) => exam.type === "uts")[0];
  const uas = data?.exams.filter((exam) => exam.type === "uas")[0];

  const stats = [
    {
      title: "Ujian Tengah Semester",
      value: uts?.score,
      icon: FaFilePen,
      iconColor: "text-blue-500",
      iconBgColor: "bg-blue-500/10",
    },
    {
      title: "Ujian Akhir Semester",
      value: uas?.score,
      icon: FaAward,
      iconColor: "text-emerald-500",
      iconBgColor: "bg-emerald-500/10",
    },
  ];

  return (
    <div className="p-6 mx-auto container max-w-[800px]">
      <TeacherReportPersonHeader />

      {isLoading ? (
        <TeacherReportPersonProfileSkeleton />
      ) : (
        <TeacherReportPersonProfile
          student={data?.student}
          subject={data?.subject}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {isLoading
          ? [1, 2].map((i) => <TeacherReportPersonStatSkeleton />)
          : stats.map((stat, index) => <StatCard key={index} {...stat} />)}
      </div>

      <div className="space-y-4 mt-6">
        {isLoading ? (
          <>
            <TeacherReportPersonCardSkeleton />
            <TeacherReportPersonCardSkeleton />
          </>
        ) : (
          <>
            <TeacherReportPersonCard
              title="Nilai Tugas"
              data={data?.assignments}
              color="#4f46e5"
            />
            <TeacherReportPersonCard
              title="Ujian Harian"
              data={dailyExams}
              color="#10b981"
            />
          </>
        )}
      </div>
    </div>
  );
};

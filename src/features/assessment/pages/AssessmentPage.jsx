import React from "react";
import { useParams } from "react-router";
import AssesmentCard from "../ui/AssesmentCard";
import useAssesment from "../hooks/useAssessment";
import { MdPerson } from "react-icons/md";

export const AssessmentPage = () => {
  const { id_class, id_post } = useParams();
  const { data } = useAssesment(id_class, id_post);
  const total = data?.length;
  const done = data?.filter(
    (d) => d.status === "graded" || d.status === "done",
  ).length;

  return (
    <div className="container max-w-[1080px] mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-heading font-bold text-md sm:text-xl">
          Daftar Pengumpulan
        </h1>
        <div className="flex items-center gap-2">
          <h1 className="text-heading font-bold text-md sm:text-xl">
            {done} / {total}
          </h1>
          <MdPerson size={24} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data?.map((assesment, index) => (
          <AssesmentCard
            key={index}
            id={assesment?.id}
            name={assesment?.student?.user?.name}
            photo={assesment?.student?.user?.photo}
            updated_at={assesment?.updated_at}
            score={assesment?.score}
            status={assesment?.status}
          />
        ))}
      </div>
    </div>
  );
};

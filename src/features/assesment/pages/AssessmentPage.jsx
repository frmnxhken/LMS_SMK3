import React from "react";
import AssesmentCard from "../ui/AssesmentCard";
import useAssesment from "../hooks/useAssessment";
import { useParams } from "react-router";

const AssessmentPage = () => {
  const { id_class, id_post } = useParams();
  const { data } = useAssesment(id_class, id_post);
  return (
    <div className="container max-w-[1080px] mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data?.map((assesment, index) => (
          <AssesmentCard
            key={index}
            id={assesment?.id}
            name={assesment?.student?.user?.name}
            updated_at={assesment?.updated_at}
            score={assesment?.score}
            status={assesment?.status}
          />
        ))}
      </div>
    </div>
  );
};

export default AssessmentPage;

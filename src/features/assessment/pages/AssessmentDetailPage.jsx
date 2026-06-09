import React, { useState } from "react";
import { useParams } from "react-router";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";
import FileViewer from "@/shared/ui/media/FileViewer";
import AssesmentFile from "../ui/AssesmentFile";
import AssesmentProfile from "../ui/AssesmentProfile";
import AssesmentProfileSkeleton from "../ui/skeletons/AssesmentProfileSkeleton";
import AssesmentFileSkeleton from "../ui/skeletons/AssesmentFileSkeleton";
import useAssesmentDetail from "../hooks/useAssessmentDetail";
import useGradeSubmission from "../hooks/useGradeSubmission";

export const AssessmentDetailPage = () => {
  const { id_class, id_post, id_submission } = useParams();
  const { data, isLoading } = useAssesmentDetail(id_class, id_submission);
  const { score, handleInput, handleSubmit, errors } = useGradeSubmission(
    id_class,
    id_post,
    id_submission,
    data?.score,
  );
  const [docView, setDocView] = useState(null);
  const files = data?.submission_files;

  return (
    <div className="container relative max-w-[780px] mx-auto py-6 px-4 flex flex-col sm:flex-row gap-4 justify-between">
      <div className="w-full">
        {isLoading ? (
          <AssesmentProfileSkeleton />
        ) : (
          <AssesmentProfile
            photo={data?.student?.user?.photo}
            name={data?.student?.user?.name}
            date={data?.updated_at}
          />
        )}
        <FileViewer file={docView} onClose={() => setDocView(null)} />
        {isLoading ? (
          <AssesmentFileSkeleton />
        ) : (
          <AssesmentFile files={files} onView={(file) => setDocView(file)} />
        )}
      </div>
      <div className="w-full sm:w-80">
        <div className="border border-app-border p-4 rounded-xl">
          <form onSubmit={handleSubmit} method="post">
            <FormInput
              value={score}
              onInput={handleInput}
              label="0 - 100"
              type="number"
              name="score"
            />
            <Button className="w-full mt-2">Nilai</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

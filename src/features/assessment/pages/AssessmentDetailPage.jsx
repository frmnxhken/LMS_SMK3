import Button from "@/shared/ui/buttons/Button";
import FileCard from "@/shared/ui/cards/FileCard";
import FormInput from "@/shared/ui/forms/FormInput";
import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { useParams } from "react-router";
import useAssesmentDetail from "../hooks/useAssessmentDetail";
import { formatDateDMY } from "@/shared/lib/formatDate";
import useGradeSubmission from "../hooks/useGradeSubmission";
import FileViewer from "@/shared/ui/media/FileViewer";
import { BASE_IMAGE_PROFILE } from "@/shared/lib/Constants";

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
        <div className="flex items-center gap-4">
          <img
            className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] object-cover rounded-full"
            src={BASE_IMAGE_PROFILE + data?.student?.user?.photo}
            alt="profile"
          />
          <div>
            <h3 className="text-sm sm:text-md font-semibold">
              {data?.student?.user?.name}
            </h3>
            <div className="flex items-center gap-2 text-text-muted">
              <IoTimeOutline size={18} />
              <span className="text-xs">{formatDateDMY(data?.updated_at)}</span>
            </div>
          </div>
        </div>

        <FileViewer file={docView} onClose={() => setDocView(null)} />

        <div className="py-6">
          <h2 className="text-text-heading font-bold text-md sm:text-lg mb-4">
            Lampiran
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {files?.map((file, index) => (
              <FileCard
                onClick={() => setDocView(file.file_path)}
                key={index}
                {...file}
                isDeletable={false}
              />
            ))}
          </div>
        </div>
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

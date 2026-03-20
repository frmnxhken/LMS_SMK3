import Button from "@/shared/ui/buttons/Button";
import FileCard from "@/shared/ui/cards/FileCard";
import FormInput from "@/shared/ui/forms/FormInput";
import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { useParams } from "react-router";
import useAssesmentDetail from "../hooks/useAssesmentDetail";
import { formatDateDMY } from "@/shared/lib/formatDate";
const image =
  "https://cdn.idn.media/idnaccount/avatar/500/71e9df185dcc84e99ddf1dc97cc37467.webp?v=1768211620";

const AssesmentDetailPage = () => {
  const { id_class, id_submission } = useParams();
  const { data, isLoading } = useAssesmentDetail(id_class, id_submission);
  const files = data?.submission_files;

  return (
    <div className="container relative max-w-[780px] mx-auto py-6 px-4 flex flex-col sm:flex-row gap-4 justify-between">
      <div className="w-full">
        <div className="flex items-center gap-4">
          <img
            className="w-[50px] h-[50px] object-cover rounded-full"
            src={image}
            alt="profile"
          />
          <div>
            <h3 className="text-md font-semibold">
              {data?.student?.user?.name}
            </h3>
            <div className="flex items-center gap-2">
              <IoTimeOutline size={18} />
              <span className="text-xs text-text-muted">
                {formatDateDMY(data?.updated_at)}
              </span>
            </div>
          </div>
        </div>

        <div className="py-6">
          <h2 className="text-text-heading font-bold text-lg mb-4">Lampiran</h2>
          <div className="grid grid-cols-2 gap-3">
            {files?.map((file, index) => (
              <FileCard key={index} {...file} isDeletable={false} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full sm:w-80">
        <div className="border border-app-border p-4 rounded-xl">
          <FormInput label="0 - 100" type="number" min="0" max="100" />
          <Button className="w-full mt-2">Nilai</Button>
        </div>
      </div>
    </div>
  );
};

export default AssesmentDetailPage;

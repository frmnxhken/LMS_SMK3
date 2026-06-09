import React from "react";
import FileCard from "@/shared/ui/cards/FileCard";

const CourseAttachmentDetail = ({ files, onView }) => {
  return (
    <div className="py-6">
      <h2 className="text-text-heading font-bold text-md sm:text-lg mb-4">
        {files?.length > 0 ? "Lampiran" : "Tidak ada Lampiran"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {files?.map((file, index) => (
          <FileCard
            onClick={() => onView(file.file_path)}
            key={index}
            {...file}
            isDeletable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseAttachmentDetail;

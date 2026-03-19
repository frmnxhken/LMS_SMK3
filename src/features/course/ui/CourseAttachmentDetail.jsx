import React from "react";
import FileCard from "@/shared/ui/cards/FileCard";

const CourseAttachmentDetail = ({ files }) => {
  return (
    <div className="py-6">
      <h2 className="text-text-heading font-bold text-lg mb-4">Lampiran</h2>
      <div className="grid grid-cols-2 gap-3">
        {files?.map((file, index) => (
          <FileCard key={index} {...file} isDeletable={false} />
        ))}
      </div>
    </div>
  );
};

export default CourseAttachmentDetail;
